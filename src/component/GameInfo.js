import React, { Component } from "react";

export default class GameInfo extends Component {
  render() {
    return (
      <div>
        <div className="display-5 text-warning">
          I'm Iron Man. I love you 3000!!!
        </div>
        <div className="display-5 text-success">
          Total Win Game:
          <span className="text-warning ml-2">1</span>
        </div>
        <div className="display-5 text-success">
          Total Game Play:
          <span className="text-warning ml-2">1</span>
        </div>
      </div>
    );
  }
}
