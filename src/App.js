import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import Squares from './Squares'
import './App.css';
import './box.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      colors: ["blue", "red", "red", "red"]
    }
    //smalltime DJ
    this.smallTimeChangeEventHandler = this.smallTimeChangeEventHandler.bind(this)
    //party DJ
    this.mediumTimeChangeEventHandler = this.mediumTimeChangeEventHandler.bind(this)
    //Professional DJ
    this.largeTimeChangeLeftEventHandler = this.largeTimeChangeLeftEventHandler.bind(this)
    this.largeTimeChangeRightEventHandler = this.largeTimeChangeRightEventHandler.bind(this)
    //Big Time DJ
    this.bigTimeChangeTopLeftEventHandler = this.bigTimeChangeTopLeftEventHandler.bind(this)
    this.bigTimeChangeTopRightEventHandler = this.bigTimeChangeTopRightEventHandler.bind(this)
    this.bigTimeChangeBottomLeftEventHandler = this.bigTimeChangeBottomLeftEventHandler.bind(this)
    this.bigTimeChangeBottomRightEventHandler = this.bigTimeChangeBottomRightEventHandler.bind(this)

  }


  //Small time DJ:
  smallTimeChangeEventHandler() {
    //debugger
    let colorType
    this.setState(prevState => {
      if (prevState.colors[0] !== "white") {
        colorType = ["white", "white", "white", "white"]
      } else if (prevState.colors[0] === "white") {
        colorType = ["black", "black", "black", "black"]
      }
      return {
        colors: colorType
      }
    })
    this.setState({ color: colorType })
  }

  //Party DJ:
  mediumTimeChangeEventHandler() {
    let colorType
    this.setState(prevState => {
      colorType = ["purple", "purple", prevState.colors[2], prevState.colors[3]]
      return {
        colors: colorType
      }
    })
    this.setState({ color: colorType })
  }
 
  //Professional DJ:
  largeTimeChangeLeftEventHandler() {
    let colorType
    this.setState(prevState => {
      colorType = [prevState.colors[0], prevState.colors[1], "green", prevState.colors[3]]
      return {
        colors: colorType
      }
    })
    this.setState({ color: colorType })
  }
  largeTimeChangeRightEventHandler() {
    let colorType
    this.setState(prevState => {
      colorType = [prevState.colors[0], prevState.colors[1], prevState.colors[2], "cyan"]
      return {
        colors: colorType
      }
    })
    this.setState({ color: colorType })
  }

  /* Big Time DJ */
  /* Top Left */
  bigTimeChangeTopLeftEventHandler() {
    let colorType
    this.setState(prevState => {
      colorType = ["pink", prevState.colors[1], prevState.colors[2], prevState.colors[3]]
      return {
        colors: colorType
      }
    })
    this.setState({ color: colorType })
  }
  /* Top Right */
  bigTimeChangeTopRightEventHandler() {
    let colorType
    this.setState(prevState => {
      colorType = [prevState.colors[0], "grey", prevState.colors[2], prevState.colors[3]]
      return {
        colors: colorType
      }
    })
    this.setState({ color: colorType })
  }
  /* Bottom Left */
  bigTimeChangeBottomLeftEventHandler() {
    let colorType
    this.setState(prevState => {
      colorType = [prevState.colors[0], prevState.colors[1], "yellow", prevState.colors[3]]
      return {
        colors: colorType
      }
    })
    this.setState({ color: colorType })
  }
  /* Bottom Right */
  bigTimeChangeBottomRightEventHandler() {
    let colorType
    this.setState(prevState => {
      colorType = [prevState.colors[0], prevState.colors[1], prevState.colors[2], "skyblue"]
      return {
        colors: colorType
      }
    })
    // this.setState({ color: colorType })
  }


  render() {


    return (

      <div>
        <div>
          <div className="grid2x2">
            <Squares colors={this.state.colors[0]} index="1" />
            <Squares colors={this.state.colors[1]} index="2" />
          </div>
          <div className="grid2x2">
            <Squares colors={this.state.colors[2]} index="3" />
            <Squares colors={this.state.colors[3]} index="4" />
          </div>
          {/* Smalltime */}
          <div>
            <button onClick={this.smallTimeChangeEventHandler}>Small</button>
          </div>
          {/* Party */}
          <div>
            <button onClick={this.mediumTimeChangeEventHandler}>Medium</button>
          </div>
          {/* Professional */}
          <div>
            <button onClick={this.largeTimeChangeLeftEventHandler}>Large Left</button>
            <button onClick={this.largeTimeChangeRightEventHandler}>Large Right</button>
          </div>
          {/* Big Time */}
          <div>
            <button onClick={this.bigTimeChangeTopLeftEventHandler}>Big Time TL</button>
            <button onClick={this.bigTimeChangeTopRightEventHandler}>Big Time TR</button>
            <button onClick={this.bigTimeChangeBottomLeftEventHandler}>Big Time BL</button>
            <button onClick={this.bigTimeChangeBottomRightEventHandler}>Big Time BR</button>
          </div>
        </div>
      </div>
    )
  }
}
export default App;


/