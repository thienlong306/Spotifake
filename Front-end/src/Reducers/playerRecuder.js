const listsong = [
  {
    id: 1,
    name: "NoCopyrightSounds.Au5 - Closer (feat. Danyka Nadeau) [NCS Release]",
    description: "Text",
    year: "2000",
    view: "5",
    liked: "2",
  },
  {
    id: 2,
    name: "NoCopyrightSounds.Chime - Phototropic [NCS Release]",
    description: "Text",
    year: "2000",
    view: "7",
    liked: "4",
  },
  {
    id: 3,
    name: "NoCopyrightSounds.Diamond Eyes - Everything [NCS Release]",
    description: "Text",
    year: "2000",
    view: "10",
    liked: "6",
  },
  {
    id: 4,
    name: "NoCopyrightSounds.Domastic - Forever [NCS Release]",
    description: "Text",
    year: "2000",
    view: "9",
    liked: "4",
  },
  {
    id: 5,
    name: "NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
    description: "Text",
    year: "2000",
    view: "15",
    liked: "7",
  },
];
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
    return {...state,songURL:require("../data/"+listsong[action.idSong-1].name+".mp3"),
                     imageSongURL:require("../data/"+listsong[action.idSong-1].name+".webp"),
                     nameSong:listsong[action.idSong-1].name,
                     isPlaying:true,
                     indexSongPlaying:action.idSong};
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
