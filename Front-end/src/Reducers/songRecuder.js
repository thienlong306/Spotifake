import song from "../data/data.json";
const playlist={
  song:song,
  playlist:null
}
const songRecuder = (state = playlist, action) => {
  switch (action.type) {
    case "CHANGE-LIST-TRENDING":
      const list = song.filter(function (n, i) {
        return n.playlist === action.playlist;
      });
      return {...state,song:list,playlist:action.playlist};
    default:
      return state;   
  }
};
export default songRecuder;
