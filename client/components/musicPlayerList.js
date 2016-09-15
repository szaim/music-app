var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');
var Poster = require('./poster');

var Playlist = React.createClass({

	selectedPoster: function(selected) {
		console.log('selected song!');
		console.log('poster form playlist', this.props.poster);
		// var selected = {this.props.images}


		return(
		<Poster songPoster={selected}/>
		)
	},

	render: function() {


		return (



			<div onClick={this.selectedPoster} className='musicList offset-sm-7'>
				<ul className='list-unstyled '>
				<li className='singleSong'>
					<span>{this.props.num}</span>
					<img className='p-l-0.5' src={this.props.images} /> 
					<span className='p-l-1 m-r-0'>
					{this.props.name}, {this.props.artist} 
					</span>
					<audio  controls>
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