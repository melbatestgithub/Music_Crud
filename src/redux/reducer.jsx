import { ADD_MUSIC, SET_MUSIC_LIST } from "./constant";
export const MusicReducer = (data = [], action) => {
    switch (action.type) {
        case ADD_MUSIC:
            return [action.data, ...data]
        case SET_MUSIC_LIST:
            return [...action?.data]
        default:
            return data

    }
}