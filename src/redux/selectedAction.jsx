import { SEARCH_MUSIC, SELECTED_MUSIC } from "./constant"
import { MUSIC_TO_UPDATE ,DELETE_MUSIC} from "./constant";
export const selectedMusic = (data) =>{
    return{
        type:SELECTED_MUSIC,
        data
    }
}
export const musicTOUpdate = (data) =>{
    return{
        type:MUSIC_TO_UPDATE,
        data
    }
}

export const deleteMusic=(data)=>{
    return{
        type:DELETE_MUSIC,
        data
    }
}

export const searchMusic=(data)=>{
    return{
        type:SEARCH_MUSIC,
        data
    }
}