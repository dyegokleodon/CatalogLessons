const initialState = {
    token: '',
    name: 'Teste'
};

export default (state = initialState, action) => {
// eslint-disable-next-line
    switch(action.type) {
        case 'SET TOKEN':
            return {...state, token: action.payload.token};
        case 'SET_NAME':
            return {...state, name: action.payload.name};
    }

    return state;
}