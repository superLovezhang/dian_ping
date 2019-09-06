const defaultState = {
    cityCurrent: '武汉'
};

export default function (state = defaultState, action) {
    const {type , value} = action;
    switch (type) {
        case 'changeCity':
            return { cityCurrent: value }
        default:
            return { cityCurrent: '武汉' }
    }
}