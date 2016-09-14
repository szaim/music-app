var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');
var Poster = require('./poster');

var Playlist = React.createClass({

	selectedPoster: function(selected) {
		console.log('selected song!');
		// var selected = {this.props.images}


		return(
		<Poster songPoster={selected}/>
		)
	},

	render: function() {


		return (



			<div onClick={this.selectedPoster} className='musicList offset-sm-7'>
			<Poster />
				<ul className='list-unstyled'>
				<li className='singleSong'>
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