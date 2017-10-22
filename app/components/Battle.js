import React, { Component } from 'react';
import PlayerInput, { PlayerPreview } from './PlayerInput';


export default class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {    
    const newState = {};
    newState[id + 'Name'] = username;
    newState[id + 'Image'] = `https://github.com/${username}.png?size=200`;

    this.setState(newState);
  }

  handleReset(id) {
    const newState = {};
    newState[id + 'Name'] = '';
    newState[id + 'Image'] = null;    
    
    this.setState(newState);
  }

  render() {
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;
    let playerOneImage = this.state.playerOneImage;
    let playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />}

            {playerOneImage !== null &&
              <PlayerPreview
                avatar={playerOneImage}
                username={playerOneName}
                onReset={this.handleReset}
                id='playerOne'
              />}

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />}

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              onReset={this.handleReset}
              id='playerTwo'
            />}
        </div>
      </div>
    )
  }
}
