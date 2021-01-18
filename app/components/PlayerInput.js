import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

export default function PlayerInput(props) {
  const [username, setUsername] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    props.onSubmit(
      props.id,
      username
    );
  }, [props.id])

  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor="username">
        {props.label}
      </label>
      <input
        id="username"
        placeholder="github username"
        type="text"
        autoComplete="off"
        defaultValue={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="button"
        type="submit"
        disabled={!username}>
        Submit
      </button>
    </form>
  )
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

PlayerInput.defaultProps = {
  label: 'Username'
}
