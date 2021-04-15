/* eslint-disable no-lone-blocks */
const stateDefault = {
  diceGameArray: [
    { id: "rock", img: "./img/rock.png", chosen: false },
    { id: "paper", img: "./img/paper.png", chosen: true },
    { id: "scissors", img: "./img/scissors.png", chosen: false },
  ],
  resultMsg: "I'm Iron Man. I love you 3000!!!",
  totalWinGame: 1,
  totalGamePlay: 1,
  computer: { id: "rock", img: "./img/rock.png" },
};

const win = "win";
const lose = "lost";

// gameResultMap[Player][Computer] = win means player win computer
const gameResultMap = {
  paper: {
    rock: win,
    scissors: lose,
  },
  rock: {
    scissors: win,
    paper: lose,
  },
  scissors: {
    paper: win,
    rock: lose,
  },
};

const DiceGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHOOSE_GAME_ITEM": {
      // Reset diceGameArray
      let gameArrayUpdate = [...state.diceGameArray];

      // Create new gameArray from old game array and action.id that player send
      gameArrayUpdate = gameArrayUpdate.map((item, index) => {
        if (item.id === action.id) {
          return { ...item, chosen: true };
        }
        return { ...item, chosen: false };
      });

      state.diceGameArray = gameArrayUpdate;
      return { ...state };
    }
    case "RANDOM_GAME_ITEM": {
      // let randomNum = Math.floor(Math.random() * 3);

      // Craete random chosen item
      let randomChosenItem = state.diceGameArray[action.randomNum];

      // let that random chosen item to become chosen item for computer
      state.computer = randomChosenItem;

      return { ...state };
    }
    case "END_GAME":
      {
        let player = state.diceGameArray.find((item) => item.chosen === true);
        let computer = state.computer;

        switch (gameResultMap[player.id][computer.id]) {
          case win:
            state.resultMsg = "I'm Iron Man. I love you 3000!!!";
            state.totalWinGame += 1;
            break;
          case lose:
            state.resultMsg = "You lose !!!";
            break;
          default:
            state.resultMsg = "Draw !!!";
          // break;
        }
      }
      state.totalGamePlay += 1;
      return { ...state };
    default:
      return { ...state };
  }
};

export default DiceGameReducer;
