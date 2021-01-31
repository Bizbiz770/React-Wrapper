"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyCityWeatherReportList = exports.getCityWeatherReport = void 0;
const ramda_1 = require("ramda");
const Services_1 = require("../Services");
const Utils_1 = require("../Utils");
const _1 = require(".");
const appLoader_actions_1 = require("./appLoader.actions");
exports.getCityWeatherReport = (city) => {
    return async (dispatch, getState) => {
        const errorMessage = ramda_1.pathOr('', ['home', 'errorMessage'], getState());
        if (!Utils_1.isEmptyOrNil(errorMessage)) {
            dispatch({
                type: _1.ACTION_TYPES.HOME_ACTIONS.SET_CITY_ERROR_MESSAGE,
                payload: '',
            });
        }
        await dispatch(appLoader_actions_1.toggleAppScreenLoader(true));
        const weatherResponse = await Services_1.HomeApiHandlers.getCityWeatherReport(city);
        if (!Utils_1.isEmptyOrNil(weatherResponse.data)) {
            const weatherList = Services_1.HomeHelpers.getFormattedCityWeatherList(weatherResponse);
            dispatch({
                type: _1.ACTION_TYPES.HOME_ACTIONS.SET_CITY_WEATHER,
                payload: weatherList,
            });
        }
        else {
            const errorMessage = ramda_1.pathOr('', ['error', 'response', 'data', 'message'], weatherResponse);
            dispatch({
                type: _1.ACTION_TYPES.HOME_ACTIONS.SET_CITY_ERROR_MESSAGE,
                payload: errorMessage,
            });
            console.log(errorMessage);
        }
        await dispatch(appLoader_actions_1.toggleAppScreenLoader(false));
    };
};
exports.emptyCityWeatherReportList = () => {
    return async (dispatch) => {
        dispatch({
            type: _1.ACTION_TYPES.HOME_ACTIONS.SET_CITY_WEATHER,
            payload: [],
        });
    };
};
//# sourceMappingURL=home.actions.js.map