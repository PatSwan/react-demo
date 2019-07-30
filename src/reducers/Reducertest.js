export default (state = 0, action) => {
    switch (action.type) {
        case "increment":
            return state + action.a;
        case "decrement":
            return state - action.a;
        default:
            return state;
    }
};