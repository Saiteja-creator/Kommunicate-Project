import { Component } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import SelectedPlan from "./components/SelectedPlan";
import PickAdd from "./components/PickAdd";
import Submit from "./components/Submit";
//import TextField from "@mui/material/TextField";

class App extends Component {
  state = { step: 1 };

  nextStepNo = () => {
    this.setState((prevState) => ({ step: prevState.step + 1 }));
  };

  backStepNo = () => {
    this.setState((prevState) => ({ step: prevState.step - 1 }));
  };

  getDisplayList = () => {
    console.log("getDisplay");
    return (
      <div>
        <ul className="larget-device">
          <li className="listed">
            <p className="number">1</p>
            <div className="info-container">
              <p className="steps">steps1</p>
              <p className="info">YOUR INFO</p>
            </div>
          </li>
          <li className="listed">
            <p className="number">2</p>
            <div className="info-container">
              <p className="steps">steps2</p>
              <p className="info">SELECT PLAN</p>
            </div>
          </li>
          <li className="listed">
            <p className="number">3</p>
            <div className="info-container">
              <p className="steps">steps3</p>
              <p className="info">ADD-ONS</p>
            </div>
          </li>
          <li className="listed">
            <p className="number">4</p>
            <div className="info-container">
              <p className="steps">steps4</p>
              <p className="info">SUMMARY</p>
            </div>
          </li>
        </ul>
        <ul className="small-device">
          <p className="number">1</p>
          <p className="number">2</p>
          <p className="number">3</p>
          <p className="number">4</p>
        </ul>
      </div>
    );
  };

  getResult = () => {
    const { step } = this.state;
    console.log(step);
    switch (step) {
      case 1:
        return <PersonalDetails nextStepNo={this.nextStepNo} />;
      case 2:
        return (
          <SelectedPlan
            backStepNo={this.backStepNo}
            nextStepNo={this.nextStepNo}
          />
        );
      case 3:
        return (
          <PickAdd backStepNo={this.backStepNo} nextStepNo={this.nextStepNo} />
        );
      case 4:
        return <Submit />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="app-container">
        <div className="image-container">{this.getDisplayList()}</div>
        {this.getResult()}
      </div>
    );
  }
}
export default App;
