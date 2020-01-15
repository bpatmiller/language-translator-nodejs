//import './main.scss';

import React, { Component } from 'react';
import ServiceTerms from "./service-terms/service-terms.jsx";
import Translator from "./translator/translator.jsx";


export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ServiceTerms/>
        <hr/>
        <Translator/>
      </div>
    );
  }
}
