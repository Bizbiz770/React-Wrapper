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
const FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
const react_if_1 = require("react-if");
const Themes_1 = require("../../Themes");
const ramda_1 = require("ramda");
const native_1 = __importDefault(require("styled-components/native"));
const AppStyledComponents_1 = require("./AppStyledComponents");
const validateUrl = (str) => /(http(s?)):\/\//i.test(str);
const BadgeCounterContainer = native_1.default.View `
  position: absolute;
  left: -5;
  top: 0;
  background-color: ${Themes_1.Colors.darkSecondary};
  border-radius: 50;
  height: 15;
  padding-horizontal: 3;
  align-items: center;
`;
const BadgeCounter = (props) => {
    const { badgeCounter = 0 } = props;
    return (<BadgeCounterContainer>
      <AppStyledComponents_1.AppText color={Themes_1.Colors.white} fontSize={Themes_1.Fonts.size.small} fontWeight="bold" width={40} textAlign="center">
        {badgeCounter > 1000 ? `${badgeCounter}+` : badgeCounter}
      </AppStyledComponents_1.AppText>
    </BadgeCounterContainer>);
};
const IconWithBadge = (props) => {
    const { name = 'chevron-down', color = Themes_1.Colors.primary, iconSize = 'medium', showBadge = false, badgeCounter = 0, useCustomIcon = false, customIconSource, useSvgIcon = false, RenderSvgIcon = () => <></>, iconStyle = {
        margin: Themes_1.Metrics.baseMargin,
    }, } = props;
    const isHttpUrl = validateUrl(customIconSource);
    const imageSrc = isHttpUrl ? { uri: customIconSource } : customIconSource;
    return (<react_native_1.View style={iconStyle}>
      
      <react_if_1.If condition={!useCustomIcon && !useSvgIcon && !ramda_1.isEmpty(name)}>
        <FontAwesome_1.default name={name} style={{ fontSize: Themes_1.Metrics.icons[iconSize], color }}/>
      </react_if_1.If>
      
      <react_if_1.If condition={useCustomIcon}>
        <react_native_1.Image source={imageSrc} resizeMode="contain" style={{
        height: Themes_1.Metrics.icons[iconSize],
        width: Themes_1.Metrics.icons[iconSize],
    }}/>
      </react_if_1.If>
      
      <react_if_1.If condition={useSvgIcon}>{RenderSvgIcon()}</react_if_1.If>

      <react_if_1.If condition={showBadge && badgeCounter > 0}>
        <BadgeCounter badgeCounter={badgeCounter}/>
      </react_if_1.If>
    </react_native_1.View>);
};
exports.default = IconWithBadge;
//# sourceMappingURL=IconWithBadge.js.map