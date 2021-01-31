"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleAppScreenLoader = void 0;
const action_types_1 = __importDefault(require("./action.types"));
const updateLoader = (isLoading) => ({
    type: action_types_1.default.TOGGLE_APP_LOADING,
    isLoading,
});
exports.toggleAppScreenLoader = (isLoading) => {
    return (dispatch) => {
        if (!isLoading) {
            setTimeout(() => {
                dispatch(updateLoader(isLoading));
            }, 100);
        }
        else {
            dispatch(updateLoader(isLoading));
        }
    };
};
//# sourceMappingURL=appLoader.actions.js.map