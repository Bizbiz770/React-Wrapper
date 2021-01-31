"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// libs
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
// src
const reducers_1 = __importDefault(require("./reducers"));
const store = redux_1.createStore(reducers_1.default, 
// loadState(),
redux_1.applyMiddleware(redux_thunk_1.default));
// store.subscribe(throttle(() => saveState(store.getState()), 1000))
exports.default = store;
//# sourceMappingURL=store.js.map