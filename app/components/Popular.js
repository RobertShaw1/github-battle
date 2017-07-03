const  React = require('react');
const PropTypes = require('prop-types');

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

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All' //This sets the initial state
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang
            }
        });
    }
    render() {
        return (
           <div>
               <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
           </div>
        )
    }
}

module.exports = Popular;