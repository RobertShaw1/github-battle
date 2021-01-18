import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '3rem',
  }
}

export default function Loading(props) {
  const [text, setText] = useState(props.text)

  useEffect(() => {
    const stopper = text + '...';
    const interval = window.setInterval(() => {
      if (text === stopper) {
        setText(text);
      } else {
        setText(prevText => prevText + '.');
      }
    }, props.speed)

    return () => window.clearInterval(interval);
  },[])

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
