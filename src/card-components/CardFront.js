import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      className="card-front"
				style={{ backgroundImage: `url(${this.props.poster})` }}
			/>
    )
  }
}
