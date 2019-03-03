
import React, { Component } from 'react';
import navbar from "./components/navbar";
import header from "./components/header";
import main from "./components/main";
import footer from "./components/footer";
import image from "./components/image";
import img from "./components/img.json"
import bunchflower from "./images/bunchflower.jpg"
import cactusflower from "./images/cactusflower.jpg"
import hibiscus from "./images/hibiscus.jpg"
import lilyflower from "./images/lilyflower.jpg"
import niceflower from "./images/niceflower.jpg"
import orangeroses from "./images/orangeroses.jpg"
import pineflower from "./images/pineflower.jpg"
import redrose from "./images/redrose.jpg"
import specialflower from "./images/specialflower.jpg"
import sunflower from "./images/sunflower.jpg"
import violetflower from "./images/violetflower.jpg"
import whiteflower from "./images/whiteflower.jpg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  // credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray = (array) => {
    let imgArray = img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "bunchflower":
        return `${bunchflower}`
      case "cactusflower":
        return `${cactusflower}`
      case "hibiscus":
        return `${hibiscus}`
      case "lilyflower":
        return `${lilyflower}`
      case "niceflower":
        return `${niceflower}`
      case "orangesroses":
        return `${orangeroses}`
      case "pineflower":
        return `${pineflower}`
      case "redrose":
        return `${redrose}`
      case "specialflower":
        return `${specialflower}`
      case "sunflower":
        return `${sunflower}`
      case "violetflower":
        return `${violetflower}`
      case "whiteflower":
        return `${whiteflower}`
      default:
        return `${bunchflower}`
    }
  }

  render() {
    return (
      <div>
        <navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <header />
        <main>
          {this.shuffleArray(img).map(image => (
            <image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
