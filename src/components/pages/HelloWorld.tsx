import React, { Component } from 'react';

class HelloWorld extends Component<any> {
  public render() {
    return (
      <div
        onClick={() => this.props.history.goBack()}
        style={{ cursor: 'pointer', color: 'tomato', marginTop: '20px'}}
      >
        GO BACK TO MAIN PAGE!
      </div>
    );
  }
}

export default HelloWorld;
