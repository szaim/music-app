
var redux = require('redux');
let React = require('react');
let ReactDOM = require('react-dom');




var App = React.createClass({
  render: function() {
    return (
      <div>
       This Works!
      </div>
    )
  }


});



document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
     document.getElementById('app'));

});