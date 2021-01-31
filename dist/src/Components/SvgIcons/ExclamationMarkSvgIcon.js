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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
const Themes_1 = require("../../Themes");
const ExclamationMarkSvgIcon = (props) => {
    const { fillColor = Themes_1.Colors.error, height = 24, width = 24 } = props;
    return (<react_native_svg_1.default width={width} height={height} {...props}>
      <react_native_svg_1.Path fill={fillColor} fillRule="evenodd" d="M12 2.5a9 9 0 110 18 9 9 0 010-18zm0 11.25a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm0-8.25a1.705 1.705 0 00-1.684 1.975L11 11.75a1.013 1.013 0 002 0l.684-4.275A1.705 1.705 0 0012 5.5z"/>
    </react_native_svg_1.default>);
};
exports.default = ExclamationMarkSvgIcon;
//# sourceMappingURL=ExclamationMarkSvgIcon.js.map