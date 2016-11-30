var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');
var Playlist = require('./musicPlayerList');


var Poster = React.createClass({
	render: function() {
		var divStyle = {
  			backgroundRepeat: 'no-repeat',
  			backgroundSize: "center",
  			backgroundImage: 'url(' + this.props.posters + ')'
  			

  			
	};
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

