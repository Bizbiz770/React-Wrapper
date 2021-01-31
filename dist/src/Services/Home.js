"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const moment_1 = __importDefault(require("moment"));
const Utils_1 = require("../Utils");
/**
 * Parses Weather object to its own format and return a new object
 *
 * @param {*} news
 * @returns
 */
const formatWeather = (weather) => {
    const dtTxt = ramda_1.propOr('', 'dt_txt', weather);
    const time = !Utils_1.isEmptyOrNil(dtTxt) && moment_1.default(dtTxt).format('LT');
    const date = !Utils_1.isEmptyOrNil(dtTxt) && Utils_1.formatWeatherDate(dtTxt);
    return {
        dtTxt,
        feelsLike: ramda_1.pathOr('', ['main', 'feels_like'], weather),
        description: ramda_1.pathOr('', ['weather', '0', 'description'], weather),
        temp: ramda_1.pathOr('', ['main', 'temp'], weather),
        time,
        date
    };
};
/**
 * Parses response from the endpoint.GET_CITY_WEATHER and returns formatted weather list
 *
 * @param {*} response
 * @returns
 */
const getFormattedCityWeatherList = (response) => {
    console.log(response);
    const weatherList = ramda_1.pathOr([], ['data', 'list'], response);
    return ramda_1.map((weather) => {
        return formatWeather(weather);
    }, weatherList);
};
exports.default = {
    getFormattedCityWeatherList,
};
//# sourceMappingURL=Home.js.map