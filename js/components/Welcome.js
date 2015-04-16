var React = require('react');

var Welcome = React.createClass({
    getInitialState: function() {
        return this.props;
    },
    handleFireSubmit: function() {
        this.props.onFireSubmit(this.state);
    },
    render: function() {
        return(
            <div className="small-12.columns">
                <h1>{this.state.data.title}</h1>
                <button onClick={this.handleFireSubmit}>Fire !</button>
            </div>
        )
    }
});

module.exports = Welcome;