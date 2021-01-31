"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_hooks_1 = require("axios-hooks");
const lru_cache_1 = __importDefault(require("lru-cache"));
const BASE_URL = `api.openweathermap.org/data/2.5`;
const cache = new lru_cache_1.default({ max: 10 });
const initApiConfig = (params) => {
    const { isLoggedIn, authToken = '' } = params;
    exports.axiosInstance = axios_1.default.create({
        baseURL: `https://${BASE_URL}`,
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
            ...(isLoggedIn ? { 'Authorization': authToken } : {}),
        },
    });
    axios_hooks_1.configure({ axios: exports.axiosInstance, cache });
};
exports.default = initApiConfig;
//# sourceMappingURL=api.config.js.map