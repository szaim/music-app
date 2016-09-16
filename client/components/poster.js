var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');
var Playlist = require('./musicPlayerList');


var Poster = React.createClass({
	render: function() {
		var divStyle = {
  			// backgroundColor: 'white',
  			backgroundRepeat: 'no-repeat',
  			backgroundSize: "center",
  			// backgroundPosition: 'center',
  			backgroundImage: 'url(' + this.props.posters + ')'
  			

  			
	};
	//console.log is pulling the new poster value from the newPoster state (after click event)
	console.log("poster", this.props.posters);
		return (
			<div className='poster col-xs-6 text-xs-center hidden-sm-down m-t-1' >
			<div className="span-img" style={divStyle} />
	
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