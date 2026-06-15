import { ADDED, ALLCLEARECOMPLETED, ALLCOMPLETED } from "./actionTypes";

export const added = (title: string) => {
    return {
        type: ADDED,
        payload: {
            title
        }
    }
}

export const addcompleted = () => {
    return {
        type: ALLCOMPLETED,
    }
}

export const allclearecompleted = () => {
    return {
        type: ALLCLEARECOMPLETED
    }
}