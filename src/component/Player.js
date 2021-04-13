import React, { Component } from "react";

export default class Player extends Component {
  render() {
    return (
      <div className="text-center game-player">
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
          src="./img/player.png"
          alt="./img/player.png"
        />
        <div className="row">
          <div className="col-4">
            <button className="btnItem">
              <img
                width={40}
                height={40}
                src="./img/rock.png"
                alt="./img/rock.png"
              />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img
                width={40}
                height={40}
                src="./img/paper.png"
                alt="./img/paper.png"
              />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img
                width={40}
                height={40}
                src="./img/scissors.png"
                alt="./img/scissors.png"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
