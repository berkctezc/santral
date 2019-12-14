import React from "react";

import {Button ,YuvarlakButton , DenemeButton as Deneme} from './button';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test"
    };
  }
  render() {
    const { title } = this.props;
    const { test } = this.state;
    return (

      <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
          {test}

        </a>
        <Button title="test"></Button>
        <YuvarlakButton title="test"></YuvarlakButton>
        <Deneme title="Deneme"></Deneme>

      </div>
    );
  }
}

// iki farklı component tipi var -> function ve classbase component

export default Header;
