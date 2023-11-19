import { MUSIC_LIST, ADD_MUSIC, UPDATE_MUSIC } from "./constant";

export const MusicList = () => {
  return {
    type: MUSIC_LIST,
  };
};

export const addMusic = (data) => {
  return {
    type: ADD_MUSIC,
    data,
  };
};

export const updateMusic = (data) => {
  return {
    type: UPDATE_MUSIC,
    data,
  };
};
