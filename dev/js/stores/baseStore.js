var Reflux = require('reflux');
var actions = require('../actions/index');

var store = Reflux.createStore({
    listenables: [actions],
    data: {title : 'To the moon'},
    init() {
        this.trigger(this.data);
    },
    onFire(res){
        console.log('your data response', res.data);
    },
    getInitialState() {
        return this.data;
    }
});

module.exports = store;