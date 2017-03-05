const EventEmitter = {
    _events: {},
    dispatch(event, data) {
        if (this._events[event]) {

            for (var i = 0; i < this._events[event].length; i++) {
                this._events[event][i](data);
            }
        }
    },
    subscribe(event, callback) {
        if (!this._events[event]) {
            this._events[event] = [];
        }

        this._events[event].push(callback);
    },
    unSubscribe(event) {
        if (this._events[event]) {
            delete this._events[event];
        }
    }
};

export default EventEmitter;
