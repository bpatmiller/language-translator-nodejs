//import './header.scss';

import logoImage from "../../assets/images/language-translator.svg";
import linkImage from "../../assets/images/link.svg";

import React, { Component } from 'react';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header>
          {/* top nav section */}
          <div class="navbar-wrapper">
            <div class="navbar navbar-default navbar-fixed-top" role="navigation">
              <div class="container">
                {/* IBM Watson Logo */}
                <div class="navbar-header">
                  <a class="navbar-brand no-underline" href="https://www.ibm.com/watson/developer/">
                    <span class="thin-branding">IBM</span> Watson APIs</a>
                </div>
                {/* .navbar right */}
              </div>
              {/* .container */}
            </div>
            {/* .navbar */}
          </div>
          {/* .navbar-wrapper */}
          {/* Service Description Bar */}
          <div class="header">
            <div class="container">
              <div class="col-lg-2 col-md-2 hidden-sm hidden-xs">
                <img src={logoImage} class="service-icon"/>
              </div>
              <div class="col-lg-10 col-md-10 col-sm-12">
                <h1>Language Translator</h1>
                <p>The IBM Watson Language Translator service allows you to input text or documents in one language and
                  see the output in another.
                  Translation is available for over 36 languages: Arabic, Bulgarian, Catalan, Chinese (Simplified &
                  Traditional), Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Greek,
                  Hebrew, Hindi, Hungarian, Italian, Indonesian, Irish, Japanese, Korean, Lithuanian, Norwegian, Polish,
                  Portuguese (Brazil), Romanian, Russian, Slovak, Slovenian, Spanish, Swedish, Thai, and Turkish
                </p>
                <p>
                  <img src={linkImage} class="glyph"/><strong>Resources:</strong><br/>
                <div class="resources">
                  <a href="https://cloud.ibm.com/apidocs/language-translator">API Overview</a>
                  <a
                      href="https://cloud.ibm.com/docs/services/language-translator?topic=language-translator-gettingstarted">Documentation</a>
                  <a href="https://github.com/watson-developer-cloud/language-translator-nodejs">Fork on Github</a>
                  <a class="base--button base--button_fill"
                     href="https:/cloud.ibm.com/registration/?target=%2Fcatalog%2Fservices%2Flanguage-translator%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409">Start
                    for free in IBM Cloud</a>
                  </div>
                </p>
                  {/* .resources */}
              </div>
              {/* .col-lg-10 */}
            </div>
          {/* .container */}
          </div>
        < /header>
    );
  }
}
