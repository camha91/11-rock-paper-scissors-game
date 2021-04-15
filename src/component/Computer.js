import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}
    }`;
    return (
      <div className="text-center game-computer">
        <style>{keyframe}</style>
        <div className="chosen-item" style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              left: "20%",
              animation: `randomItem${Date.now()} 0.5s`,
              transform: "rotate(120deg)",
            }}
            className="mt-3"
            width={70}
            height={70}
            src={this.props.computer.img}
            alt={this.props.computer.img}
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

const mapStateToProps = (state) => {
  return {
    computer: state.DiceGameReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
