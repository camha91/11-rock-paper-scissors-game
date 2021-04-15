import React, { Component } from "react";
import { connect } from "react-redux";

class GameInfo extends Component {
  render() {
    return (
      <div className="game-info mt-5">
        <div className="text-warning">{this.props.resultMsg}</div>
        <div className="text-success">
          Total Win Game:
          <span className="text-warning ml-2">{this.props.totalWinGame}</span>
        </div>
        <div className="text-success">
          Total Game Play:
          <span className="text-warning ml-2">{this.props.totalGamePlay}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resultMsg: state.DiceGameReducer.resultMsg,
    totalWinGame: state.DiceGameReducer.totalWinGame,
    totalGamePlay: state.DiceGameReducer.totalGamePlay,
  };
};

export default connect(mapStateToProps)(GameInfo);
