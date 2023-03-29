export const BUY_ITEM = "BUY_ITEM";

export const addItem = (item) => {
    return {
        type: BUY_ITEM,
        payload: item,
    }
}