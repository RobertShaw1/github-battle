const React = require('react');
const Popular = require('./Popular');

//Create App component
class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        )
    }
}

module.exports = App;
