var redux = require('redux');
var React = require('react');
var ReactDOM = require('react-dom');
var store = require('./store');
var Provider = require('react-redux').Provider;
var connect = require('react-redux').connect;
var actions = require('./actions/actions');
var Form = require('./components/Form');
var Playlist = require('./components/musicPlayerList');
require('./css/style.css');
var BackgroundVideo = require('./components/backgroundVideo');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Link = router.Link;


var App = React.createClass({


//   <div style="position: fixed; z-index: -99; width: 100%; height: 100%">
//   <iframe frameborder="0" height="100%" width="100%" 
//     src="https://youtube.com/embed/ID?autoplay=1&controls=0&showinfo=0&autohide=1">
//   </iframe>
// </div>



  render: function() {


    return (
      <div className="container center">
      
         <Form />

      </div>
    )
  }





});




document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('app'));

});
