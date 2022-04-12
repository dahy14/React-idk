const initialState = {
    cards: [
        {id: 1, title: 'Alex', body: 'Description 1'},
        {id: 2, title: 'Wilma', body: 'Description 2'},
        {id: 3, title: 'John', body: 'Description 3'},
    ]
}

const rootReducer = (state = initialState, action) => {
    return state;
}

export default rootReducer;