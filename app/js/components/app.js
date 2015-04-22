var React = require('react');
var Reflux = require('reflux');
var store = require('../stores/baseStore');
var actions = require('../actions/index');

// Load components //
var Welcome = require('./welcome');

var App = React.createClass({

    mixins: [Reflux.connect(store)],

    render: function() {
        return(
            <div className="welcome">
                <Welcome data={this.state} onFireSubmit={actions.fire}/>
            </div>
        )
    }
});

module.exports = App;