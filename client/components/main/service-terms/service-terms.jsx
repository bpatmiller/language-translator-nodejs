import React, { Component } from 'react';

export default class ServiceTerms extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.onStuff = this.onStuff.bind(this);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div>
            <h6><strong>Would you like to help make this service better?</strong>
              <br/><br/>
              <div className="form-group opt-box-input">
                <input type="radio" name="serRadio" id="serRadio" value="0" style={{marginLeft: "0"}}
                       checked/>Allow Watson
                to learn from this session<br/><input type="radio" id="serRadio" name="serRadio" value="1"
                                                      style={{marginLeft: "0"}}/>Opt out
              </div>
              <div>This system is for demonstration purposes only and is not intended to process Personal Data.
                No Personal Data is to be entered into this system as it may not have the necessary controls in
                place to meet the requirements of the General Data Protection Regulation (EU) 2016/679
              </div>
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
    );
  }
}

