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
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("styled-components/native"));
const EvilIcons_1 = __importDefault(require("react-native-vector-icons/EvilIcons"));
const Animatable = __importStar(require("react-native-animatable"));
const react_if_1 = require("react-if");
const ramda_1 = require("ramda");
const Themes_1 = require("../../Themes");
const AppStyledComponents_1 = require("./AppStyledComponents");
const IconWithText_1 = __importDefault(require("./IconWithText"));
const buttonWidth = Themes_1.Metrics.screenWidth - (Themes_1.Metrics.doubleBaseMargin * 2 - 10);
const smallButtonWidth = buttonWidth / 2;
const ButtonContainer = native_1.default(react_native_1.TouchableOpacity) `
  width: ${(props) => (props.fullWidth ? buttonWidth : ramda_1.prop('width', props))};
  height: ${(props) => props.height};
  padding: 12px;
  border-radius: ${(props) => ramda_1.propOr(0, 'borderRadius', props)};
  align-items: center;
  justify-content: center;
  background-color: ${(props) => ramda_1.propOr(Themes_1.Colors.primary, 'buttonColor', props)};
`;
const ButtonLabel = native_1.default(AppStyledComponents_1._Text) `
  font-size: ${Themes_1.Fonts.size.medium};
  color: ${Themes_1.Colors.white};
  font-family: TTCommons-DemiBold;
  font-weight: ${react_native_1.Platform.OS === 'android' ? '400' : 'bold'};
  text-align: center;
`;
const ButtonIcon = native_1.default(EvilIcons_1.default) `
  font-size: ${Themes_1.Fonts.size.h1};
  color: ${Themes_1.Colors.white};
  font-weight: bold;
  text-align: center;
`;
const ButtonLoaderIcon = () => (<Animatable.View iterationCount={'infinite'} animation="rotate">
    <ButtonIcon name="spinner-3"/>
  </Animatable.View>);
const PrimaryButton = (props) => {
    const { buttonLabel = 'Primary Button', fullWidth = false, width = smallButtonWidth, height = 55, onClickHandler, activeOpacity = 0.2, disabled = false, loading = false, buttonColor, showIconComponent = false, iconName = '', borderRadius = 5, } = props;
    return (<ButtonContainer activeOpacity={activeOpacity} onPress={onClickHandler} fullWidth={fullWidth} width={width} height={height} borderRadius={borderRadius} disabled={disabled || loading} buttonColor={buttonColor}>
      <react_if_1.If condition={loading}>
        <ButtonLoaderIcon />
      </react_if_1.If>
      <react_if_1.If condition={!loading}>
        <react_if_1.If condition={showIconComponent}>
          <react_if_1.Then>
            <IconWithText_1.default width="auto" fontSize={Themes_1.Fonts.size.regular} fontWeight={react_native_1.Platform.OS === 'android' ? '400' : 'bold'} iconColor={Themes_1.Colors.white} textColor={Themes_1.Colors.white} textStyle={{
        fontFamily: 'TTCommons-DemiBold',
        bottom: 2,
    }} icon={iconName} iconSize="small" text={buttonLabel}/>
          </react_if_1.Then>
          <react_if_1.Else>
            <ButtonLabel>{buttonLabel}</ButtonLabel>
          </react_if_1.Else>
        </react_if_1.If>
      </react_if_1.If>
    </ButtonContainer>);
};
exports.default = PrimaryButton;
//# sourceMappingURL=PrimaryButton.js.map