"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const ramda_1 = require("ramda");
const native_1 = __importDefault(require("styled-components/native"));
const react_if_1 = require("react-if");
const Themes_1 = require("../Themes");
const Components_1 = require("../Components");
const Utils_1 = require("../Utils");
const HomeScreenContainer = native_1.default.View `
  flex: 1;
  background-color: ${Themes_1.Colors.white};
`;
const HomeScreen = () => {
    const state = react_redux_1.useSelector((state) => state);
    const weatherList = ramda_1.pathOr([], ['home', 'weatherList'], state);
    return (<HomeScreenContainer>
      <Components_1.ErrorMessage />
      <react_native_1.FlatList data={weatherList} contentContainerStyle={{
        paddingHorizontal: Themes_1.Metrics.doubleBaseMargin,
        paddingBottom: Themes_1.Metrics.doubleBaseMargin,
    }} ListHeaderComponent={() => <Components_1.HomeContent />} renderItem={({ item }) => <Components_1.WeatherCard item={item}/>} showsVerticalScrollIndicator={false} keyExtractor={(item) => item.dtTxt.toString()}/>
      <react_if_1.If condition={Utils_1.isEmptyOrNil(weatherList)}>
        <Components_1.HomePlaceholder />
      </react_if_1.If>
    </HomeScreenContainer>);
};
exports.default = HomeScreen;
//# sourceMappingURL=HomeScreen.js.map