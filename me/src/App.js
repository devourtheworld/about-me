// import './App.css';
import { Component } from 'react';
// import Plates from './components/plates.js';
import Me from './components/aboutMe.js';


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  // test = () => {
  //   return(<Me/>);
  // }

  render(){
    return(
    <div className="Plates">
      <header className="header-1">Who am I?</header>
      <div className="story">
        <p onMouseOver={this.onButtonClick} >my story</p>
        {this.state.showComponent ? <Me/> : null}
      </div>
      <div className="city">
        <p>my city</p>
      </div>
      <div className="career">
        <p>my career</p>
      </div>
      <div className="instagram">
        <p>my instagram</p>
      </div>
      <div className="twitter">
        <p>my twitter</p>
      </div>
      <div className="email">
        <p>my email</p>
      </div>
    </div>
    )
  }
}
