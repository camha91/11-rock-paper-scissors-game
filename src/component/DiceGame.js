import React, { Component } from "react";
import "../assets/DiceGame.css";
import Computer from "./Computer";
import GameInfo from "./GameInfo";
import Player from "./Player";
import { connect } from "react-redux";
import {
  endGameAction,
  randomGameItemAction,
} from "../redux/actions/DiceGameActions";

class DiceGame extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center mt-2">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <GameInfo />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success p-2 display-4 mt-3"
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;

      // Set up repeat function
      let randomComputerItem = setInterval(() => {
        let randomNum = Math.floor(Math.random() * 3);

        dispatch(randomGameItemAction(randomNum));
        count++;

        if (count > 10) {
          clearInterval(randomComputerItem);

          dispatch(endGameAction());
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(DiceGame);
