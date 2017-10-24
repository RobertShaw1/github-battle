import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '3rem',
  }
}

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  componentDidMount() {
    const stopper = this.state.text + '...';
    this.interval = window.setInterval(() => {
      if(this.state.text === stopper) {
        this.setState({text: this.props.text});
      } else {
        this.setState(prevState => {
          return {
            text: prevState.text + '.',
          }
        });
      }
    }, 300)
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
}

Loading.defaultProps = {
  text: 'Loading',
}
