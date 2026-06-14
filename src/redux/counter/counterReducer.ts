import { DECREMENT, INCREMENT } from "./actionTypes"

const initialStage = {
    value: 20
}
const counterReducer = (state = initialStage, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }

        case DECREMENT:
            return {
                ...state,
                value: state.value -  1
            }

        default:
            return state;
    }
}

export default counterReducer;