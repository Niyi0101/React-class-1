import { createStore } from "redux";


const initialState ={
    count: 0
}
const CounterState=(state=initialState, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
            case 'DECREMENT':
                return {
                    ...state,
                    count: state.count - 1
                }
                case 'RESET':
                    return {
                        ...state,
                        count: 0
                    }
                    default:
                        return state
    }
}

export const store = createStore(CounterState)