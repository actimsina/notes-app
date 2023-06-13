const noteReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NOTES':
            return {
                ...state,
                notes: action.payload
            }
        case 'SET_DESC':
            return {
                ...state,
                desc: action.payload
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            }
        default:
            throw new Error('action not defined')
    }
}

export default noteReducer