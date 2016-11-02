var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = Router.route;
var DefaultRoute = Router.DefaultRoute;

var APP = require('./components/App.jsx');
var Audience = require('./components/Audience.js');
var Speaker = require('./components/Speaker.js');
var Board = require('./components/Board.js');

var routes = (
    <Route handler={APP}>
        <DefaultRoute handler={Audience} />
        <Route name="speaker" path="speaker" handler={Speaker}></Route>
        <Route name="board" path="board" handler={Board}></Route>
    </Route>
);

Router.run(routes,  function(Handler) {
    ReactDOM.render(<Handler />,document.getElementById('react-container'));
});
