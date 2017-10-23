/**NODE MODULES */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

/**LOCAL MODULES */
import api from '../utils/api';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    }
  }

  componentDidMount() {
    let players = queryString.parse(this.props.location.search)
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(results => {
      if(!results){
        return this.setState({
          error: 'Looks like there was an error. Check that both users exist on Github.',
          loading: false,
        })
      }
      this.setState({
        error: null,
        winner: results[0],
        loser: results[1],
        loading: false,
      })
    })
  }

  render() {
    const { error, winner, loser, loading } = this.state;

    if(loading) return <p>Loading</p>;
    if(error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }

    return (
      <div>
        {JSON.stringify(this.state, null, 2)}
      </div>
    )
  }
}