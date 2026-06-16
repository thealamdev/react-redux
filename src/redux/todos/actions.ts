import { ADDED, ALLCLEARECOMPLETED, ALLCOMPLETED, COLORCHANGED, DELETED, TOGGLED } from "./actionTypes";

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

export const colorChanged = (id: number, color: string) => {
    return {
        type: COLORCHANGED,
        paylaod: {
            id: id,
            color: color
        }
    }
};

export const deleted = (id: number) => {
    return {
        type: DELETED,
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