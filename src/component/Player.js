import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  renderGameItem = () => {
    return this.props.rockPaperScissorsArray.map((item, index) => {
      let border = {};
      if (item.chosen) {
        border = { border: "5px solid green" };
      }
      return (
        <div key={index} className="col-4">
          <button
            style={border}
            onClick={() => {
              this.props.chooseGameItem(item.id);
            }}
            className="btnItem"
          >
            <img width={40} height={40} src={item.img} alt={item.img} />
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="text-center game-player">
        <div className="chosen-item">
          <img
            style={{ transform: "rotate(120deg)" }}
            className="mt-3"
            width={70}
            height={70}
            src={
              this.props.rockPaperScissorsArray.find(
                (item) => item.chosen === true
              ).img
            }
            alt={
              this.props.rockPaperScissorsArray.find(
                (item) => item.chosen === true
              ).img
            }
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: "200px", height: "180px" }}
          src="./img/player.png"
          alt="./img/player.png"
        />
        <div className="row">{this.renderGameItem()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rockPaperScissorsArray:
      state.RockPaperScissorsGameReducer.rockPaperScissorsArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseGameItem: (id) => {
      dispatch({
        type: "CHOOSE_GAME_ITEM",
        id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
