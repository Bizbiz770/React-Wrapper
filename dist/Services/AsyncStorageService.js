"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_storage_1 = __importDefault(require("@react-native-community/async-storage"));
/**
 * fetch data from the async storage
 *
 * @param {string} key
 * @returns
 */
const getAsyncStorageItem = async (key) => {
    // console.log('getting from async storage: ', key)
    // AsyncStorage.clear()
    try {
        const value = await async_storage_1.default.getItem(key);
        if (value !== null) {
            // value previously stored
            return value;
        }
        return '';
    }
    catch (e) {
        // error reading value
        return '';
    }
};
/**
 * save an object or string to the async storage
 *
 * @param {string} key
 * @param {(string | object)} data
 */
const saveToAsyncStorage = async (key, data) => {
    // console.log('saving to async storage', key)
    // console.log('saving to async storage', data)
    const parsedData = typeof data === 'string' ? data : JSON.stringify(data);
    async_storage_1.default.setItem(key, parsedData);
};
/**
 * remove key from the async storage
 *
 * @param {string} key
 */
const removeKeyFromAsyncStorage = async (key) => {
    // console.log('removing from async storage: ', key)
    async_storage_1.default.removeItem(key);
};
exports.default = {
    getAsyncStorageItem,
    saveToAsyncStorage,
    removeKeyFromAsyncStorage
};
//# sourceMappingURL=AsyncStorageService.js.map