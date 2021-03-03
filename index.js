const redux = require("redux");
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "hai",
  };
};
const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfCakes: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("intialState", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(
  //ActionCreator:
  buyCake()
);
store.dispatch(
  //ActionCreator:
  buyCake()
);
store.dispatch(
  //ActionCreator:
  buyCake()
);
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
