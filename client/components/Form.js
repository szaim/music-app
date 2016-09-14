var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');

var Form = React.createClass({

	onSubmit: function(e) {
		e.preventDefault();
		var searchItem = this.refs.userInput.value;
		this.props.dispatch(actions.fetchData(searchItem));
		searchItem = '';
	},

	render: function() {
		console.log('music list', this.props.musicList);
		var list = this.props.musicList.map(function(value, index) {
			console.log("value",value.album.name);
			return (
			<div key={index}>{value.album.name}</div>

			);
		});

		return (
			<div>
			<form onSubmit={this.onSubmit}>
				<input type='text' placeholder='Enter Song' ref='userInput' required />
				<button type='submit' className='btn btn-primary'>Search</button>
			</form>
			{list}
			</div>
			);
	}

});

var mapStateToProps = function(state, props) {
  return {
    musicList: state.musicList
  }
}

var Container = connect(mapStateToProps)(Form);

module.exports = Container;