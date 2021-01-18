/* NODE MODULES */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/* LOCAL MODULES */
import api from '../utils/api';
import Loading from './Loading';


function SelectLanguage(props) {
  let languages = ['All', 'JavaScript', 'Go', 'OCaml', 'Ruby', 'Java', 'CSS', 'Python', 'Shell'];
  return (
    <ul className="languages">
      {languages.map(lang => {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map((repo, index) => (
        <li key={repo.name} className="popular-item">
          <div className="popular-rank">#{index + 1}</div>
          <ul className="space-list-items">
            <li>
              <img
                className="avatar"
                src={repo.owner.avatar_url}
                alt={'Avatar for ' + repo.owner.login}
              />
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
      ))}
    </ul>
  )
}

//propTypes
RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

//Popular Components
export default function Popular(props) {
  const [selectedLanguage, setSelectedLanguage] = useState('All')
  const [repos, setRepos] = useState(null)
  
  const updateLanguage = useCallback((lang) => {
    setRepos(null);
    setSelectedLanguage(lang);

    api.fetchPopularRepos(lang)
      .then( repos => {
        setRepos(repos);
      })
  })

  useEffect(() => {
    updateLanguage(selectedLanguage);
  }, [])


  return (
    <div>
      <SelectLanguage
        selectedLanguage={selectedLanguage}
        onSelect={updateLanguage}
      />
      {!repos
        ? <Loading />
        : <RepoGrid repos={repos} />
      }
    </div>
  )
}
