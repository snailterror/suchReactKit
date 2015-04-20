/**
 * Created by Raphael on 20/04/2015.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var sass        = require('gulp-sass');
var reload      = browserSync.reload;

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./dev/js/app.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
        .on('update', function () { // When any files update
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle() // Create new bundle that uses the cache for high performance
                .pipe(source('bundle.js'))
                // This is where you add uglifying etc.
                .pipe(gulp.dest('./dist/js/'))
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
        .bundle() // Create the initial bundle when starting the task
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(reload({stream: true}));
});

// Static Server + watching scss/html files
gulp.task('serve', ['browserify','sass'], function() {

    browserSync.init({
        server: "./dist",
        open: false
    });
    gulp.watch("dist/js/*.js", ['browserify']);
    gulp.watch("dev/*.scss", ['sass']);
    gulp.watch("dist/*.html").on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("dev/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
