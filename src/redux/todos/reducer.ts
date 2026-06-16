import { ADDED, ALLCLEARECOMPLETED, ALLCOMPLETED, COLORCHANGED, DELETED, TOGGLED } from "./actionTypes";
import { initialValues, type Todo } from "./initialValues";

const reducer = (state = initialValues, action: any) => {
    const nextId = state.reduce((acc: number, todo: Todo) => {
        return Math.max(acc, todo.id);
    }, -1) + 1;

    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextId,
                    title: action.payload.title
                }
            ];

        case TOGGLED:
            return state.map((item) => {
                if (item.id !== action.payload) {
                    return item;
                }

                return {
                    ...item,
                    completed: !item.completed
                }
            });

        case COLORCHANGED:

            return state.map((item) => {
                console.log(action.payload)
                if (item.id !== action.payload.id) {
                    return item;
                }

                return {
                    ...item,
                    color: action.payload.color === item.color ? '' : action.payload.color
                }
            });

        case DELETED:
            return state.filter((item) => item.id !== action.payload);

        case ALLCOMPLETED:
            return state.map((item: Todo) => {
                return {
                    ...item,
                    completed: true,
                }
            })

        case ALLCLEARECOMPLETED:
            return state.filter((item: Todo) => !item.completed === true)

        default:
            return state;

    }

}

export default reducer;