/**
 * Created by Adrien on 15/04/2015.
 */
var React = require('react');

var App = React.createClass({
    getInitialState: function(){
        return {data : {'title': 'Just wow'}};
    },
    render: function() {
        return(
            <div className="row">
                <Welcome data={this.state.data}/>
            </div>
        );
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
        );
    }
});

React.render(
    <App />,
    document.getElementById('app')
);