"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortListByKey = exports.isAnyPropertyEmptyInObject = exports.renameKeysInObject = exports.createFormData = exports.renameKeysInList = exports.formatWeatherDate = exports.capitalizeFirstLetter = exports.mapIndexed = exports.isEmptyOrNil = void 0;
const ramda_1 = require("ramda");
const moment_1 = __importDefault(require("moment"));
// returns true if the param is empty or nil
exports.isEmptyOrNil = ramda_1.anyPass([ramda_1.isEmpty, ramda_1.isNil]);
exports.mapIndexed = ramda_1.addIndex(ramda_1.map);
exports.capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
exports.formatWeatherDate = (dateTime) => {
    const day = moment_1.default(dateTime).format('ddd');
    const date = moment_1.default(dateTime).format('L');
    const formatDate = date.replace(/\//g, ".");
    return `${day}, ${formatDate}`;
};
exports.renameKeysInList = (keyMap, list) => {
    if (exports.isEmptyOrNil(keyMap) || exports.isEmptyOrNil(list))
        return list;
    const renameKeys = ramda_1.curry((keysMap, obj) => ramda_1.reduce((acc, key) => ramda_1.assoc(keysMap[key] || key, obj[key], acc), {}, ramda_1.keys(obj)));
    return ramda_1.map(renameKeys(keyMap), list);
};
exports.createFormData = (data) => {
    const formData = new FormData();
    const formKeys = ramda_1.keys(data);
    ramda_1.forEach((key) => {
        formData.append(key, data[key]);
    }, formKeys);
    return formData;
};
exports.renameKeysInObject = ramda_1.curry((keysMap, obj) => ramda_1.reduce((acc, key) => ramda_1.assoc(keysMap[key] || key, obj[key], acc), {}, ramda_1.keys(obj)));
exports.isAnyPropertyEmptyInObject = (obj, omittedKeys = []) => {
    return ramda_1.pipe(ramda_1.omit(omittedKeys), ramda_1.values, ramda_1.any(exports.isEmptyOrNil))(obj);
};
exports.sortListByKey = ramda_1.curry((sortOrder, key, list) => {
    const sortingFunction = sortOrder === 'asc' ? ramda_1.ascend(ramda_1.prop(key)) : ramda_1.descend(ramda_1.prop(key));
    //@ts-ignore
    const sortedList = ramda_1.sort(sortingFunction, list);
    return sortedList;
});
//# sourceMappingURL=helpers.js.map