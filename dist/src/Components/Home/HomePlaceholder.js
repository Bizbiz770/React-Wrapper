"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("styled-components/native"));
const Themes_1 = require("../../Themes");
const HomePlaceholderContainer = native_1.default.View `
  position: absolute;
  right: -35;
  bottom: -50;
  z-index: -1;
`;
const HomePlaceholder = () => {
    return (<HomePlaceholderContainer>
      <react_native_1.Image source={Themes_1.Images.placeholder} style={{
        height: Themes_1.Metrics.screenHeight / 3,
        width: Themes_1.Metrics.screenWidth / 2,
    }} resizeMode="contain"/>
    </HomePlaceholderContainer>);
};
exports.default = HomePlaceholder;
//# sourceMappingURL=HomePlaceholder.js.map