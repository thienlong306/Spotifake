import song from "../data/data.json";
const songRecuder = (state = song, action) => {
  switch (action.type) {
    case "CHANGE-LIST-TRENDING":
      const list = song.filter(function (n, i) {
        return n.playlist === action.playlist;
      });
      return list;
    default:
      return state;
  }
};
export default songRecuder;
