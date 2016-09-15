var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');
var Playlist = require('./musicPlayerList');


var Poster = React.createClass({
	render: function() {
	//console.log is pulling the new poster value from the newPoster state (after click event)
	console.log("poster", this.props.posters);
		return (
			<div className='poster col-xs-6 text-xs-center '>
			<div className="span-img">
				<img className="poster-img img-fluid  m-t-4 " src={this.props.posters} />
			</div>
			<div className="title">
				<h5>{this.props.posterTitle}</h5>
			</div>
			</div>
		)
	}

}) 


var mapStateToProps = function(state, props) {
  return {
    musicList: state.musicList,
    posters: state.poster,
    posterTitle: state.title
  }
}

var Container = connect(mapStateToProps)(Poster);

module.exports = Container;



// <div className='boarder'>
// 		<Playlist num={props.num} images={props.images}
// 					name={props.name} artist={props.artist} 
// 					song={props.song}  />
// 	</div>