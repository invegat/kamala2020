import React, { Component } from 'react';

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      url: '',
      a: ''
    };
  }
  componentDidMount() {
    this.setState(
      {
        text: this.props.text,
        url: this.props.url,
        a: this.props.a
      },
      () => {} //console.log(`text:${this.state.text}  url:${this.state.url}`)
    );
  }
  render() {
    return (
      <div key={this.state.a}>
        <p>{this.state.text}</p>
        <a target='_blank' href={this.state.url}>{this.state.a}</a>
        <p style={{height: 2 }}></p>    
      </div>
    );
  }
}
