import { MUSIC_TO_UPDATE, SELECTED_MUSIC} from "./constant";
export const selectedMusic = (data = [], action) => {
    switch (action.type) {
        case SELECTED_MUSIC:
            return [action.data]
        case MUSIC_TO_UPDATE:
            return [action.data]
        default:
            return data
    }
}