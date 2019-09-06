const defaultState = {
    cityCurrent: null
};

export default function (state = defaultState, action) {
    const {type , value} = action;
    switch (type) {
        case 'changeCity':
            return { cityCurrent: value }
        default:
            return state;
    }
}