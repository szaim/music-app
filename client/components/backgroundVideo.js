var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');


var BackgroundVideo = function() {


	return (
		<div className='video'>
		<video autoplay='true' loop>
			<source src='' type='video/mp4'>
			<source src='' type='video/webm'>

		</video>
		</div>
		);

}



module.exports = BackgroundVideo;