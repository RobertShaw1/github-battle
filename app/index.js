const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const App = require('./components/App');

//Render App component to the DOM
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
