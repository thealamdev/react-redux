import { combineReducers } from "redux"
import counterReducer from "./counter/counterReducer"
import DynamicCounterReducer from "./dynamicCounter/DynamicCounterReducer"

const rootReducer =
    combineReducers({
        counter: counterReducer,
        dynamicCounter: DynamicCounterReducer
    })


export default rootReducer;