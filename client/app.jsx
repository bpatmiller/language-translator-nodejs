//import './styles.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";


class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
      </React.Fragment>
    );
  }
}

document.addEventListener("DOMContentLoaded", ()=> {
  ReactDOM.render(<Application/>, document.querySelector('body>div#app'));
});

