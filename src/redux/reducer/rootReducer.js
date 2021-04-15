import { combineReducers } from "redux";
import DiceGameReducer from "../reducer/DiceGameReducer";

const rootReducer = combineReducers({
  DiceGameReducer,
});

export default rootReducer;
