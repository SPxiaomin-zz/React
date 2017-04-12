const initialState = {
    text: 'Hello'
};

function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text == 'Hello' ? 'Stark' : 'Hello'
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
}
