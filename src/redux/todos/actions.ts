import { ADDED, ALLCLEARECOMPLETED, ALLCOMPLETED, TOGGLED } from "./actionTypes";

export const added = (title: string) => {
    return {
        type: ADDED,
        payload: {
            title
        }
    }
}

export const toggled = (id: number) => {
    return {
        type: TOGGLED,
        payload: id
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