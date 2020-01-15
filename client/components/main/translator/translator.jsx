import React, { Component } from 'react';
import resetImage from "../../../assets/images/reset.svg";

export default class Translator extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.onStuff = this.onStuff.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h2>Translate Text</h2>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h3>Input</h3>
            <p className="help-block">Enter or paste text from a passage.</p>
            <div className="form-group row">
              <div className="col-lg-12">
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenuInput"
                          data-toggle="dropdown" aria-expanded="true">
                    Choose Language
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" id="ulSourceLang">
                  </ul>
                </div>
              </div>
            </div>
            <div className="well">
              <form className="form-horizontal">
                <div role="tabpanel">
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab"
                                                                  data-toggle="tab">Text</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Rest
                      API</a></li>
                    <button style={{margin: "0", padding: "0"}} className="btn btn-secondary pull-right" type="button"
                            id="sourceTargetLangSwitch">⇄
                    </button>
                  </ul>
                  <div className="hr-tab"></div>
                  <fieldset>
                    <div className="form-group row">
                      <div className="col-lg-12">
                        <div className="tab-content">
                          <div role="tabpanel" className="tab-pane active" id="home">
                            <textarea style={{resize: "none"}}></textarea>
                            <span style={{position: "absolute", right: "1.5em", bottom: "0.5em"}}
                                  className='input-counter'></span>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="profile">
                            <textarea disabled="disabled">Example of Rest API</textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h3>Output</h3>
            <p className="help-block">Copy output from this field to clipboard.</p>
            <div className="row">
              <div className="col-lg-12">
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenuOutput"
                          data-toggle="dropdown" aria-expanded="true">
                    Choose Language
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" id="ulTargetLang">
                  </ul>
                </div>
              </div>
            </div>
            <div className="well">
              <form className="form-horizontal">
                <div role="tabpanel">
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#home2" aria-controls="home" role="tab"
                                                                  data-toggle="tab">Text</a></li>
                    <li role="presentation"><a href="#profile2" aria-controls="profile" role="tab"
                                               data-toggle="tab">JSON</a></li>
                  </ul>
                  <div className="hr-tab"></div>
                  <fieldset>
                    <div className="form-group row">
                      <div className="col-lg-12">
                        <div className="tab-content">
                          <div role="tabpanel" className="tab-pane active" id="home2">
                            <textarea style={{resize: "none"}}></textarea>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="profile2">
                            <textarea disabled="disabled">Example of JSON</textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
          <div id="resetSpan">
            <img src={resetImage} className="icon"/><a href="/">Reset</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

