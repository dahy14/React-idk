const initialState = {
    cards: [
        {id: 1, title: 'Miggy', body: 'Description 1'},
        {id: 2, title: 'Jemma', body: 'Description 2'},
        {id: 3, title: 'Genma', body: 'Description 3'},   
    ]
}

const rootReducer = (state = initialState, action) => {
    return state;
}

export default rootReducer;