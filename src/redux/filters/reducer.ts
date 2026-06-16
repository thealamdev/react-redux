import { COLORCHANGED, STATUSCHANGED } from './actionTypes';
import initialState from './initialState';
const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload.status
            }

        case COLORCHANGED:
            const isDuplicate = state.colors.includes(action.payload.color);
            if (isDuplicate) {
                const updatedColor = state.colors.filter((item) => item !== action.payload.color);
                return {
                    ...state,
                    colors: updatedColor
                }
            }

            return {
                ...state,
                colors: [...state.colors, action.payload.color],
            }

        default:
            return state;
    }
}

export default reducer;