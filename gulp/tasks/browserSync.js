'use strict';

var config      = require('../config');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function() {

	browserSync({
		proxy: 'localhost:' + config.serverport,
		open: false, //remove after fun
		reloadDebounce: 2000,
		browser: ["google chrome"]
	});

});