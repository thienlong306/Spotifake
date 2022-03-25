import songRecuder from './Reducers/songRecuder';
import playRecuder from './Reducers/playRecuder';
var redux = require("redux");
const allRecuder=redux.combineReducers({
    song:songRecuder,
    play:playRecuder,
})
var store =redux.createStore(allRecuder);
export default store;