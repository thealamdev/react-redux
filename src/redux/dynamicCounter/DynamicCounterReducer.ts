import { DDECREEMTN, DINCREMENT } from "./actionTypes";

const initialState = {
    value: 0
}

const DynamicCounterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case DINCREMENT:

            return {
                ...state,
                value: state.value + action.payload
            }

        case DDECREEMTN:
            return {
                ...state,
                value: state.value - action.payload
            }

        default:
            return state;
    }
}

export default DynamicCounterReducer;