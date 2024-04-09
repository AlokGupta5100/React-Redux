export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decNumber = (dec) => {
    return {
        type: "DECREMENT",
        payload: dec
    }
}