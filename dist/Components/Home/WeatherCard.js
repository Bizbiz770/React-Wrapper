"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_1 = __importDefault(require("styled-components/native"));
const Themes_1 = require("../../Themes");
const Commons_1 = require("../Commons");
const WeatherCardContainer = native_1.default.View `
  border-color: ${Themes_1.Colors.borderColor};
  border-radius: ${Themes_1.Metrics.baseMargin};
  border-width: 1;
  padding-horizontal: ${Themes_1.Metrics.doubleBaseMargin};
  padding-vertical: ${Themes_1.Metrics.doubleBaseMargin};
  background-color: ${Themes_1.Colors.white};
  margin-top: ${Themes_1.Metrics.baseMargin};
  margin-bottom: ${Themes_1.Metrics.smallMargin};
`;
const WeatherCardDateTimeContainer = native_1.default.View `
  justify-content: space-between;
  flex-direction: row;
`;
const WeatherCardChipContainer = native_1.default.View `
  padding-horizontal: ${Themes_1.Metrics.baseMargin - 2};
  padding-vertical: ${Themes_1.Metrics.smallMargin - 2};
  background-color: ${Themes_1.Colors.chipColor};
  margin-top: ${Themes_1.Metrics.baseMargin};
  align-self: flex-start;
  border-radius: 50;
`;
const WeatherCard = (props) => {
    const { item } = props;
    return (<WeatherCardContainer>
      <WeatherCardDateTimeContainer>
        <Commons_1.AppText color={Themes_1.Colors.primary} fontSize={Themes_1.Fonts.size.extraSmall}>
          {item.date}
        </Commons_1.AppText>
        <Commons_1.AppText color={Themes_1.Colors.primary} fontSize={Themes_1.Fonts.size.extraSmall}>
          {item.time}
        </Commons_1.AppText>
      </WeatherCardDateTimeContainer>
      <Commons_1.AppHeading fontWeight="bold">Temperature: {item.temp}k</Commons_1.AppHeading>
      <Commons_1.AppHeading fontWeight="bold">
        Feels like temperature: {item.feelsLike}k
      </Commons_1.AppHeading>
      <WeatherCardChipContainer>
        <Commons_1.AppText fontSize={Themes_1.Fonts.size.extraSmall}>{item.description}</Commons_1.AppText>
      </WeatherCardChipContainer>
    </WeatherCardContainer>);
};
exports.default = WeatherCard;
//# sourceMappingURL=WeatherCard.js.map