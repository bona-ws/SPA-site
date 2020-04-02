import { combineReducers } from "redux";
import { authentication } from "./authentication";
import { getBlog } from "./getBlog";

const rootReducer = combineReducers({
  authentication,
  getBlog
});

export default rootReducer;
