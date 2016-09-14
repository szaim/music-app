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


var App = React.createClass({

  render: function() {

    return (
      <div className="container center">
         <Form />
      </div>
    )
  }


});

// var mapStateToProps = function(state, props) {
//   return {
//     musicList: state.musicList
//   }
// }

// var Container = connect(mapStateToProps)(App)

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('app'));

});
