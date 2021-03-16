/* NODE MODULES */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* LOCAL MODULES */
import api from '../utils/api';
import {queryStringParser} from '../utils/queryStringParser'
import PlayerPreview from './PlayerPreview';
import Loading from './Loading';


function Profile(props) {
  const { info } = props;
  return (
    <PlayerPreview avatar={info.avatar_url} username={info.login}>
      <ul className="space-list-items">
        {info.name  && <li>{info.name}</li> }
        {info.location  && <li>{info.location}</li> }
        {info.company  && <li>{info.company}</li> }
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={`http://${info.blog}`}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  )
}

Profile.propTypes = {
  info: PropTypes.object.isRequired,
}

function Player (props) {
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
      <Profile info={props.profile} />
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  // profile: PropTypes.profile.isRequired,
}

export default function Results(props) {
  const [winner, setWinner] = useState(null)
  const [loser, setLoser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const players = queryStringParser()
    api.battle([
      players.playerOneName,
      players.playerTwoName,
    ]).then(results => {
      if (!results){
        throw Error('Looks like there was an error. Check that both users exist on Github.')
      }

      setWinner(results[0])
      setLoser(results[1])
      setLoading(false)
    }).catch(err => {
      setError(err)
      setLoading(false)
    })
  }, [])

  if (loading) return <Loading  />;
  if (error) {
    return (
      <div>
        <p>{error.message}</p>
        <Link to="/battle">Reset</Link>
      </div>
    )
  }

  return (
    <div className="row">
      <Player
        label="winner"
        score={winner.score}
        profile={winner.profile}
      />
      <Player
        label="loser"
        score={loser.score}
        profile={loser.profile}
      />
    </div>
  )
}
