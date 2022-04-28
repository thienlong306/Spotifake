import songRecuder from './Reducers/songRecuder';
import playerRecuder from './Reducers/playerRecuder';
var redux = require("redux");
const allRecuder=redux.combineReducers({
    song:songRecuder,
    player:playerRecuder,
})
var store =redux.createStore(allRecuder);
export default store;