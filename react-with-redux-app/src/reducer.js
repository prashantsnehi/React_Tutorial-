let initialState = {
    num: 100,
    name: "Prashant",
    age: 1,
    isLoggedIn: true,
    isLoading: false,
    isError: false,
    todos: [
        'Wake up',
        'Brush teeth',
        'Go to Morning Walk',
        'Ready for work',
        'Focus on work',
        'Lunch',
        'Focus on work again',
        'Back home',
        'Family time',
        'Sleep'
    ]
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, num: state.num + 1 }
        case "DECREMENT":
            return { ...state, num: state.num - 1 }
        case "SET_NAME":
            return { ...state, name: action.payload }
        case "SET_AGE":
            return { ...state, age: action.payload }
        case "TOGGLE_LOGIN":
            return { ...state, isLoggedIn: !state.isLoggedIn }
        case "FETCH_TODOS_REQUEST":
            return { ...state, isLoading: true, isError: false }
        case "FETCH_TODOS_SUCCESS":
            return { ...state, isLoading: false, todos: action.payload }
        case "FETCH_TODOS_FAILURE":
            return { ...state, isLoading: false, isError: true }
        case "SET_N":
            return { ...state, num: parseInt(action.payload) }
        default:
            return state;
    }
}

export default reducer;