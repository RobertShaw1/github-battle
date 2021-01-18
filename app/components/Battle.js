import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

export default function Battle(props) {
  const [playerOneName, setPlayerOneName] = useState('')
  const [playerTwoName, setPlayerTwoName] = useState('')
  const [playerOneImage, setPlayerOneImage] = useState(null)
  const [playerTwoImage, setPlayerTwoImage] = useState(null)

  const setter = {
    setPlayerOneName,
    setPlayerTwoName,
    setPlayerOneImage,
    setPlayerTwoImage,
  };

  const handleSubmit = useCallback((id, username) => {
    setter['set' + id + 'Name'](username);
    setter['set' + id + 'Image'](`https://github.com/${username}.png?size=200`);
  })

  const handleReset = useCallback((id) => {
    setter['set' + id + 'Name']('');
    setter['set' + id + 'Image'](null);
  })

    const { match } = props;

  return (
    <div>
      <div className="row">
        {!playerOneName &&
          <PlayerInput
            id="PlayerOne"
            label="Player One"
            onSubmit={handleSubmit}
          />}

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
            >
              <button
                className="reset"
                onClick={() => handleReset('PlayerOne')}
              >
                Reset
              </button>
            </PlayerPreview>
              }

        {!playerTwoName &&
          <PlayerInput
            id="PlayerTwo"
            label="Player Two"
            onSubmit={handleSubmit}
          />}

        {playerTwoImage !== null &&
          <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
          >
          <button
            className="reset"
            onClick={() => handleReset('PlayerTwo')}
          >
            Reset
          </button>
          </PlayerPreview>
        }
      </div>
      {playerOneImage && playerTwoImage &&
        <Link
          className="button"
          to={{
            pathname: `${match.url}/results`,
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
          }}
        >
        Battle
        </Link>}
    </div>
  )
}
