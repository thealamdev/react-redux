import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const statusChanged = (status: string) => {
    return {
        type: STATUSCHANGED,
        payload: {
            status: status
        }
    }
}

export const colorChanged = (color: string) => {
    return {
        type: COLORCHANGED,
        payload: {
            color: color
        }
    }
}