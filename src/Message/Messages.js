import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';


export class Messages extends Component {

  render() {
    return (

        <div className="dropdown">
            <Label for="maleFemale"><h3>Please select who you will need:</h3></Label>
            <Input className="input " type="select" name="select" onChange={this.partner} id="maleFemale">
              <option>Male</option>
              <option>Female</option>
            </Input>
            <Label className="labelDiv" for="intComp"><h3>Please select the desired division:</h3></Label>
            <Input className="input " type="select" name="select" onChange={this.partner} id="intComp">
              <option>Intermediate</option>
              <option>Competitive</option>
            </Input>
            <button type="submit" className="partnerButton float-right btn btn-success">Submit</button>
        </div>

    );
  }
};

export class Text extends Component {

  render() {
    return (

        <div className="dropdown">
            <input className="commentText" placeholder="   Enter Text Here"></input>
            <button type="submit" className="messageButton float-right btn btn-success">Submit</button>
        </div>

    );
  }
};