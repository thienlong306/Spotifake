<<<<<<< HEAD
const listsong =[
    {
        "id":1,
        "name":"NoCopyrightSounds.Au5 - Closer (feat. Danyka Nadeau) [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"5",
        "liked":"2"
    },
    {
        "id":2,
        "name":"NoCopyrightSounds.Chime - Phototropic [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"7",
        "liked":"4"
    },
    {
        "id":3,
        "name":"NoCopyrightSounds.Diamond Eyes - Everything [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"10",
        "liked":"6"
    },
    {
        "id":4,
        "name":"NoCopyrightSounds.Domastic - Forever [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"9",
        "liked":"4"
    },
    {
        "id":5,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":6,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":7,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":8,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":9,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":10,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":11,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":12,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":13,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":14,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    },
    {
        "id":15,
        "name":"NoCopyrightSounds.Fareoh - Under Water [NCS Release]",
        "description":"Text",
        "year":"2000",
        "view":"15",
        "liked":"7"
    }
=======
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
>>>>>>> 948e3c1034c4c73e9cd1e102cba85e38c38c899f
];
const player = {
  songURL: null,
  imageSongURL: null,
  nameSong: null,
  isPlaying: false,
};
const playerRecuder = (state = player, action) => {
  switch (action.type) {
    case "SELECT-PLAY-SONG":
    return {...state,songURL:require("../Data/"+listsong[action.idSong-1].name+".mp3"),
                     imageSongURL:require("../Data/"+listsong[action.idSong-1].name+".webp"),
                     nameSong:listsong[action.idSong-1].name,
                     isPlaying:true,};
    case "SET-ISPLAYING":
      return { ...state, isPlaying: !state.isPlaying };
    default:
      return state;
  }
};
export default playerRecuder;
