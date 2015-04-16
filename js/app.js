
var React = require('react');
var Reflux = require('reflux');
var store = require('./stores/BaseStore');
var actions = require('./stores/BaseActions');

var App = React.createClass({

    listenables: [actions],
    mixins: [Reflux.connect(store)],

    render: function() {
        return(
            <div className="row">
                <Welcome data={this.state.data}/>
            </div>
        )
    }
});

var Welcome = React.createClass({
    getInitialState: function(){
        return {data : this.props.data};
    },
    handleWelcomeClick: function(e) {
        console.log('log', this.state.data);
    },
    render: function() {
        return(
            <div className="small-12.columns">
                <h1>{this.state.data.title}</h1>
                <button onClick={this.handleWelcomeClick}>Welcome</button>
            </div>
        )
    }
});

React.render(
    <App />,
    document.getElementById('app')
);