import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useInterval } from '../utils/hooks'

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '3rem',
  }
}

export default function Loading(props) {
  const [text, setText] = useState(props.text)

  useInterval(() => {
    const stopper = props.text + '...';
    if (text === stopper) {
      setText(props.text);
    } else {
      setText(prevText => prevText + '.');
    }
  },props.speed)

  return (
    <p style={styles.content}>
      {text}
    </p>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
}
