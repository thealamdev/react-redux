import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import DynamicCounterReducer from "./dynamicCounter/DynamicCounterReducer";
import todoReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: DynamicCounterReducer,
    todos: todoReducer,
    filters: filterReducer
})

export default rootReducer;