const initialState = {
    text: 'Hello'
};

const myApp = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text === 'Hello' ? 'Stark' : 'Hello'
            };
        case 'BUTTON_CLICK':
            return {
                text: 'you just click button'
            };
        default:
            return {
                text: 'Hello'
            };
    }
};

export default myApp;
