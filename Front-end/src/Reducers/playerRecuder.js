import listsong from '../data/data.json'
const player = {
  songURL: null,
  imageSongURL: null,
  nameSong: null,
  isPlaying: false,
  indexSongPlaying:null,
  isLoop:false,
  isShuffle:false,
};
const playerRecuder = (state = player, action) => {
  switch (action.type) {
    case "SELECT-PLAY-SONG":
      console.log(action.idFirstSong+action.idSong);
    return {...state,songURL:require("../data/"+listsong[action.idFirstSong+action.idSong].url+".mp3"),
                     imageSongURL:require("../data/"+listsong[action.idFirstSong+action.idSong].url+".webp"),
                     nameSong:listsong[action.idFirstSong+action.idSong].url,
                     isPlaying:true,
                     indexSongPlaying:action.idFirstSong+action.idSong};
    case "SET-ISPLAYING":
      return { ...state, isPlaying: !state.isPlaying };
    case "SET-ISLOOP":
      return { ...state, isLoop: !state.isLoop};  
    case "SET-ISSHUFFLE":
      return { ...state, isShuffle: !state.isShuffle};  
    default:
      return state;
  }
};
export default playerRecuder;
