export const add = (item) => ({
    type: 'ADD',
    payload: item
})

export const remove = (index) => ({
    type: 'REMOVE',
    payload: index
})