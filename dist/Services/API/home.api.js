"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_config_1 = require("./api.config");
const endpoints_1 = __importDefault(require("./endpoints"));
const getCityWeatherReport = async (cityName) => {
    const URL = `${endpoints_1.default.GET_CITY_WEATHER}&q=${cityName}`;
    try {
        const response = await api_config_1.axiosInstance.get(URL);
        return { ...response };
    }
    catch (error) {
        return { error, data: null };
    }
};
exports.default = {
    getCityWeatherReport,
};
//# sourceMappingURL=home.api.js.map