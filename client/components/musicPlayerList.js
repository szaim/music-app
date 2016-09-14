var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');


var Playlist = React.createClass({

	render: function() {


		return (
			<div>
				<ul className='list-unstyled'>
				<li>
					{this.props.num}
					<img src={this.props.images} /> 
					{this.props.name} 
					{this.props.artist} 
					<audio controls>
						<source src={this.props.song} />
					</audio>
				</li>
				</ul>
			</div>
			);
	}

});

// var mapStateToProps = function(state, props) {
//   return {
//     musicList: state.musicList
//   }
// }

// var Container = connect()(Playlist);

module.exports = Playlist;