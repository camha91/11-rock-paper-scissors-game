/* eslint-disable no-lone-blocks */
const stateDefault = {
  rockPaperScissorsArray: [
    { id: "rock", img: "./img/rock.png", chosen: false },
    { id: "paper", img: "./img/paper.png", chosen: true },
    { id: "scissors", img: "./img/scissors.png", chosen: false },
  ],
  resultMsg: "I'm Iron Man. I love you 3000!!!",
  totalWinGame: 1,
  totalGamePlay: 1,
  computer: { id: "rock", img: "./img/rock.png" },
};

const RockPaperScissorsGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHOOSE_GAME_ITEM": {
      // Reset rockPaperScissorsArray
      let gameArrayUpdate = [...state.rockPaperScissorsArray];

      // Create new gameArray from old game array and action.id that player send
      gameArrayUpdate = gameArrayUpdate.map((item, index) => {
        if (item.id === action.id) {
          return { ...item, chosen: true };
        }
        return { ...item, chosen: false };
      });

      state.rockPaperScissorsArray = gameArrayUpdate;
      return { ...state };
    }
    case "RANDOM_GAME_ITEM": {
      // let randomNum = Math.floor(Math.random() * 3);

      // Craete random chosen item
      let randomChosenItem = state.rockPaperScissorsArray[action.randomNum];

      // let that random chosen item to become chosen item for computer
      state.computer = randomChosenItem;

      return { ...state };
    }
    case "END_GAME":
      {
        let player = state.rockPaperScissorsArray.find(
          (item) => item.chosen === true
        );
        let computer = state.computer;

        switch (player.id) {
          case "rock":
            {
              if (computer.id === "rock") {
                state.resultMsg = "Even!!!";
              } else if (computer.id === "scissors") {
                state.totalWinGame += 1;
                state.resultMsg = "I'm Iron Man. I love you 3000!!!";
              } else if (computer.id === "paper") {
                state.resultMsg = "You lose!!! :))";
              }
            }
            break;
          case "paper":
            {
              if (computer.id === "paper") {
                state.resultMsg = "Even!!!";
              } else if (computer.id === "rock") {
                state.totalWinGame += 1;
                state.resultMsg = "I'm Iron Man. I love you 3000!!!";
              } else if (computer.id === "scissors") {
                state.resultMsg = "You lose!!! :))";
              }
            }
            break;
          case "scissors":
            {
              if (computer.id === "scissors") {
                state.resultMsg = "Even!!!";
              } else if (computer.id === "paper") {
                state.totalWinGame += 1;
                state.resultMsg = "I'm Iron Man. I love you 3000!!!";
              } else if (computer.id === "rock") {
                state.resultMsg = "You lose!!! :))";
              }
            }
            break;
          default:
            state.resultMsg = "I'm Iron Man. I love you 3000!!!";
          // break;
        }
      }
      state.totalGamePlay += 1;
      return { ...state };
    default:
      return { ...state };
  }
};

export default RockPaperScissorsGameReducer;
