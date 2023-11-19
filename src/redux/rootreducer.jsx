import { combineReducers } from "redux";
import { MusicReducer } from "./reducer";
import { selectedMusic } from "./selectedReducer";

export default combineReducers({
MusicReducer,
selectedMusic
})