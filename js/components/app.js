var React = require('react');
var Reflux = require('reflux');
var store = require('../stores/BaseStore');
var actions = require('../actions/index');

// Load components //
var Welcome = require('./Welcome');

var App = React.createClass({

    mixins: [Reflux.connect(store)],

    render: function() {
        return(
            <div className="row">
                <Welcome data={this.state} onFireSubmit={actions.fire}/>
            </div>
        )
    }
});

module.exports = App;