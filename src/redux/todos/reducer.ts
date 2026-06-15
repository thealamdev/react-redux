import { ADDED, ALLCLEARECOMPLETED, ALLCOMPLETED } from "./actionTypes";
import { initialValues, type Todo } from "./initialValues";

const reducer = (state = initialValues, action: any) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: 2,
                    title: action.payload.title
                }
            ];

        case ALLCOMPLETED:
            return state.map((item: Todo) => {
                return {
                    ...item,
                    completed: true,
                }
            })

        case ALLCLEARECOMPLETED:
            return state.filter((item: Todo) => !item.completed === true)

    }

}

export default reducer;