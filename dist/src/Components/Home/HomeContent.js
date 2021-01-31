"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const _1 = require(".");
const Themes_1 = require("../../Themes");
const Commons_1 = require("../Commons");
const HomeContent = () => {
    return (<react_native_1.View style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: Themes_1.Metrics.doubleBaseMargin,
    }}>
      <Commons_1.AppHeading color={Themes_1.Colors.primary} fontSize={Themes_1.Fonts.size.h1}>
        Hello Sunshine!
      </Commons_1.AppHeading>
      <Commons_1.AppHeading paddingRight={Themes_1.Metrics.smallMargin + 3} paddingLeft={Themes_1.Metrics.smallMargin + 3} paddingTop={Themes_1.Metrics.doubleBaseMargin} paddingBottom={Themes_1.Metrics.doubleBaseMargin} fontSize={Themes_1.Fonts.size.h1} textAlign="center">
        Can you please tell me the weather in Germany?
      </Commons_1.AppHeading>
      <Commons_1.AppText>Please enter a city</Commons_1.AppText>
      <_1.HomeSearchCityForm />
    </react_native_1.View>);
};
exports.default = HomeContent;
//# sourceMappingURL=HomeContent.js.map