import { combineReducers } from "redux";
import { authentication } from "./authentication";
import { alert } from "./alertMessage";
import { getBlog } from "./getBlog";

const rootReducer = combineReducers({
  authentication,
  alert,
  getBlog
});

export default rootReducer;
