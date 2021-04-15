export const chooseGameItemAction = (id) => {
  return {
    type: "CHOOSE_GAME_ITEM",
    id,
  };
};

export const randomGameItemAction = (randomNum) => {
  return {
    type: "RANDOM_GAME_ITEM",
    randomNum,
  };
};

export const endGameAction = () => {
  return {
    type: "END_GAME",
  };
};
