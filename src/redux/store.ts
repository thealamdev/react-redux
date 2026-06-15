import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import { createLogger } from 'redux-logger'

const logger = createLogger();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myLooger = (store: any) => (next: any) => (action: any) => {
    console.log(`Previous state is ${JSON.stringify(store.getState().counter)}`);
    console.log(`Next state is ${JSON.stringify(store.getState().counter)}`);

    return next(action);
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, myLooger)));

export default store;