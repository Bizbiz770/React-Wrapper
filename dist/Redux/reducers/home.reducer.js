"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Actions_1 = require("../../Actions");
const { HOME_ACTIONS } = Actions_1.ACTION_TYPES;
const initialState = {
    weatherList: [],
    errorMessage: ''
};
const home = (state = initialState, action) => {
    switch (action.type) {
        case HOME_ACTIONS.SET_CITY_WEATHER:
            return { ...state, weatherList: action.payload };
        case HOME_ACTIONS.SET_CITY_ERROR_MESSAGE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};
exports.default = home;
//# sourceMappingURL=home.reducer.js.map