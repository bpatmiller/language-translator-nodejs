//import './main.scss';

import resetImage from "../../assets/images/reset.svg";

import React, { Component } from 'react';


export default class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <React.Fragment>
          {/* Step 2 Section */}
        <div class="container">
          <div class="row">
            <div class="col-lg-12" style={{display:"none"}}>
              <h2>Choose a Domain</h2>
            </div>
            {/* .col-lg-12 */}
            <div class="col-lg-8 col-md-12 col-sm-12" style={{display:"none"}}>
              <p class="help-block">Just like a doctor is skilled in medical terms, domain-specific models have been trained
                in terminology from various fields. They help to provide higher quality translations when used in the right
                context.</p>
              <div class="form-group" style={{marginBottom: "1em"}}>
                <input type="radio" name="group1" value="conversational"/>Conversational
                  <input type="radio" name="group1" value="general" checked="checked"/>News
                    <input type="radio" name="group1" value="patent"/>Patent
              </div>
              {/* .form-group */}
            </div>
            {/* .col-lg-8 */}
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div>
                <h6><strong>Would you like to help make this service better?</strong>
                  <br/><br/>
                  <div class="form-group opt-box-input">
                    <input type="radio" name="serRadio" id="serRadio" value="0" style={{marginLeft: "0"}} checked/>Allow Watson
                      to learn from this session<br/><input type="radio" id="serRadio" name="serRadio" value="1"
                                                            style={{marginLeft: "0"}} />Opt out
                  </div>
                  <div>This system is for demonstration purposes only and is not intended to process Personal Data. No
                    Personal Data is to be entered into this system as it may not have the necessary controls in place to meet
                    the requirements of the General Data Protection Regulation (EU) 2016/679</div>
                </h6>
                <div>
                  <h6>
                    By using this application, you agree to the&nbsp;
                    <a target="_blank" rel="noreferrer noopener"
                       href="https://watson-developer-cloud.github.io/terms?name=Language%20Translator%20Demo">
                      Terms of Use
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <hr/>
            {/* Two columns of inputs */}
            {/* First column of inputs */}
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h2>Translate Text</h2>
              </div>
              {/* .col-lg-12 */}
              <div class="col-lg-6 col-md-6 col-sm-6">
                <h3>Input</h3>
                <p class="help-block">Enter or paste text from a passage.</p>
                <div class="form-group row">
                  <div class="col-lg-12">
                    <div class="dropdown">
                      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuInput"
                              data-toggle="dropdown" aria-expanded="true">
                        Choose Language
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" id="ulSourceLang">
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .col-lg-6 */}
                {/* Tab panes */}
                <div class="well">
                  <form class="form-horizontal">
                    <div role="tabpanel">
                      {/* Nav tabs */}
                      <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab"
                                                                  data-toggle="tab">Text</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Rest
                          API</a></li>
                        <button style={{margin: "0", padding: "0"}} class="btn btn-secondary pull-right" type="button" id="sourceTargetLangSwitch">⇄</button>
                      </ul>
                      <div class="hr-tab"></div>
                      <fieldset>
                        <div class="form-group row">
                          <div class="col-lg-12">
                            <div class="tab-content">
                              <div role="tabpanel" class="tab-pane active" id="home">
                                <textarea></textarea>
                                <span style={{position: "absolute", right: "1.5em", bottom: "0.5em"}} class='input-counter'></span>
                              </div>
                              <div role="tabpanel" class="tab-pane" id="profile">
                                <textarea disabled="disabled">Example of Rest API</textarea>
                              </div>
                            </div>
                          </div>
                          {/* .col-lg-12 */}
                        </div>
                        {/* .form */}
                      </fieldset>
                    </div>
                  </form>
                </div>
                {/* /.well */}
              </div>
              {/* /.tabpanel */}
              <div class="form-group row">
              </div>
              {/* /.form */}
              <div id="resetSpan">
                <img src={resetImage} class="icon"/><a href="/">Reset</a>
              </div>
            </div>
            {/* /.row */}
            {/* Second column of inputs */}
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <h3>Output</h3>
                <p class="help-block">Copy output from this field to clipboard.</p>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="dropdown">
                      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuOutput"
                              data-toggle="dropdown" aria-expanded="true">
                        Choose Language
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" id="ulTargetLang">
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Tab panes */}
                <div class="well">
                  <form class="form-horizontal">
                    <div role="tabpanel">
                      {/* Nav tabs */}
                      <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#home2" aria-controls="home" role="tab"
                                                                  data-toggle="tab">Text</a></li>
                        <li role="presentation"><a href="#profile2" aria-controls="profile" role="tab"
                                                   data-toggle="tab">JSON</a></li>
                      </ul>
                      <div class="hr-tab"></div>
                      <fieldset>
                        <div class="form-group row">
                          <div class="col-lg-12">
                            <div class="tab-content">
                              <div role="tabpanel" class="tab-pane active" id="home2">
                                <textarea></textarea>
                              </div>
                              <div role="tabpanel" class="tab-pane" id="profile2">
                                <textarea disabled="disabled">Example of JSON</textarea>
                              </div>
                            </div>
                          </div>
                          {/* .col-lg-12 */}
                        </div>
                        {/* .form */}
                      </fieldset>
                    </div>
                  </form>
                </div>
                {/* /.well */}
              </div>
              {/* /.tabpanel */}
            </div>
            {/* /.col-lg-6 */}
        </div>
          {/* /.row */}
    {/* /.container */}
  </React.Fragment>
    );
  }
}
