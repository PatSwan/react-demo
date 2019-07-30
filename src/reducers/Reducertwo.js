export default (state=1,action) => {
    switch (action.type) {
        case 'product': return state + 10;
        default : return state;
    }
}