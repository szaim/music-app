var React = require('react');
var Playlist = require('./musicPlayerList');


var Poster = function(props) {


	return (
	<div className='poster'>
	<img src={props.songPoster} />
	</div>
	)
};

module.exports = Poster;



// <div className='boarder'>
// 		<Playlist num={props.num} images={props.images}
// 					name={props.name} artist={props.artist} 
// 					song={props.song}  />
// 	</div>