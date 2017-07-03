const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');

//A stateless functional component
function SelectLanguage(props) {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='languages'>
            {languages.map(lang => {
                return (
                    <li 
                        style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}

//propTypes
SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

//Popular Components
class Popular extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All', //This sets the initial state
            repos: null
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }
    updateLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
            .then(function(repos) {
                this.setState(() => {
                    return {
                        repos: repos
                    }
                })
            }.bind(this))
    }
    render() {
        return (
           <div>
               <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {JSON.stringify(this.state.repos, null, 2)}
           </div>
        )
    }
}

module.exports = Popular;