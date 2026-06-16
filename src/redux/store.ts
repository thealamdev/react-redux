import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import { createLogger } from "redux-logger";

const logger = createLogger({

});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))

export default store;