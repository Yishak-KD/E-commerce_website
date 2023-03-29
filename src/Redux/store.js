import shopReducer from './shop/shopReducer'
const createStore = require('redux').createStore;

const store = createStore(shopReducer);

export default store;