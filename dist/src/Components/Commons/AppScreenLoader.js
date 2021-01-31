"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const rn_progress_loader_1 = __importDefault(require("rn-progress-loader"));
const react_redux_1 = require("react-redux");
const react_if_1 = require("react-if");
const Themes_1 = require("../../Themes");
const AppScreenLoader = (props) => {
    const { isLoading = false, hudColor = Themes_1.Colors.black, color = Themes_1.Colors.white, isHUD = true, isModal = true, } = props;
    return (<react_if_1.If condition={isLoading}>
      <rn_progress_loader_1.default visible={true} isModal={isModal} isHUD={isHUD} hudColor={hudColor} color={color}/>
    </react_if_1.If>);
};
const mapStateToProps = (state) => {
    return {
        isLoading: state.appScreenLoader.isLoading,
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(AppScreenLoader);
//# sourceMappingURL=AppScreenLoader.js.map