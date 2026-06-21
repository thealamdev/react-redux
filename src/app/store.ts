import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { createLogger } from "redux-logger";

const logger = createLogger();

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger)
});

export default store;