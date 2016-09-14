var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');


var BackgroundVideo = function() {



	return (
		<div className='video'>
		<video autoPlay='true' loop>
			<source src='./songs/test.mp4' type='video/mp4' />
		</video>
		</div>
		);

}



module.exports = BackgroundVideo;