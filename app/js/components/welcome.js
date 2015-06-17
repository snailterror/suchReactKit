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
			<div className="welcome-container">
				<div className="welcome-doge">
					<img src="images/doge.jpg" alt={this.state.data.title}/>
					<h1>{this.state.data.title}</h1>
					<button onClick={this.handleFireSubmit}>Fire !</button>
				</div>
			</div>
		)
	}
});

module.exports = Welcome;