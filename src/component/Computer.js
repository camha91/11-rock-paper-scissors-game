import React, { Component } from "react";

export default class Computer extends Component {
  render() {
    return (
      <div className="text-center game-computer">
        <div className="chosen-item">
          <img
            style={{ transform: "rotate(120deg)" }}
            className="mt-3"
            width={70}
            height={70}
            src="./img/paper.png"
            alt="./img/paper.png"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: "200px", height: "180px" }}
          src="./img/playerComputer.png"
          alt="./img/playerComputer.png"
        />
      </div>
    );
  }
}
