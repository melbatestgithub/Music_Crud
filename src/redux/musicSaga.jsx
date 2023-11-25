import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_MUSIC,
  DELETE_MUSIC,
  MUSIC_LIST,
  SEARCH_MUSIC,
  SET_MUSIC_LIST,
  UPDATE_MUSIC,
} from "./constant";
import axios from "axios";

function* getMusic() {
  let data = yield fetch("https://music-data-stbm.onrender.com/music");
  data = yield data.json();
  yield put({ type: SET_MUSIC_LIST, data });
}

function* add_Music(action) {
  const musicData = action.data;

  try {
    const response = yield axios.post(
      "https://music-data-stbm.onrender.com/music",
      musicData
    );
    yield put({ type: SET_MUSIC_LIST, payload: response.data });
  } catch (err) {
    console.error(err);
  }
}

function* deleteMusic(action) {
  const musicData = action.data;
  try {
    yield axios.delete(`https://music-data-stbm.onrender.com/music/${musicData}`);
  } catch (error) {
    console.log(error);
  }
}

function* updateMusic(action) {
  const musicData=action.data
  try {
    yield axios.put(`https://music-data-stbm.onrender.com/music/${musicData.id}`,musicData).then((res) => {
      put({ type: SET_MUSIC_LIST, payload: res.data });
    });
  } catch (error) {
    console.log(error);
  }
}

function *searchMusic(data){
  let music=yield fetch(`https://music-data-stbm.onrender.com/music?q=${data.data}`)
  music= yield music.json()
  yield put({type:SET_MUSIC_LIST,data:music})
}

function* musicSaga() {
  yield takeEvery(MUSIC_LIST, getMusic);
  yield takeEvery(ADD_MUSIC, add_Music);
  yield takeEvery(DELETE_MUSIC, deleteMusic);
  yield takeEvery(UPDATE_MUSIC,updateMusic)
  yield takeEvery(SEARCH_MUSIC,searchMusic)
}
export default musicSaga;
