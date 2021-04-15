import React, { Component } from "react";
import { connect } from "react-redux";
import { chooseGameItemAction } from "../redux/actions/DiceGameActions";

class Player extends Component {
  renderGameItem = () => {
    return this.props.diceGameArray.map((item, index) => {
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
              this.props.diceGameArray.find((item) => item.chosen === true).img
            }
            alt={
              this.props.diceGameArray.find((item) => item.chosen === true).img
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
    diceGameArray: state.DiceGameReducer.diceGameArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseGameItem: (id) => {
      return dispatch(chooseGameItemAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
