import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

const myLooger = (store: any) => (next: any) => (action: any) => {
    console.log(`Previous state is ${JSON.stringify(store.getState().counter )}`);
    console.log(`Next state is ${JSON.stringify(store.getState().counter)}`);

    return next(action);
}

const store = createStore(rootReducer, applyMiddleware(myLooger));

export default store;