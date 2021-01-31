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
const ChevronRightSvgIcon = (props) => {
    const { fillColor = Themes_1.Colors.primaryText, scale = 0.55, height = 24, width = 24, } = props;
    return (<react_native_svg_1.default width={width} height={height} {...props}>
      <react_native_svg_1.Path fill="none" stroke={fillColor} scale={scale} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8.4 4.8l7.053 7.137-7.053 6.97"></react_native_svg_1.Path>
    </react_native_svg_1.default>);
};
exports.default = ChevronRightSvgIcon;
//# sourceMappingURL=ChevronRightSvgIcon.js.map