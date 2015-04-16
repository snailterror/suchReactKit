var Reflux = require('reflux');

var store = Reflux.createStore({
    getInitialState(){
        return{
            data : {'title': 'Just wow'}
        }
    }
});

module.exports = store;