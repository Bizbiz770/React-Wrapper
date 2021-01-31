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
const ramda_1 = require("ramda");
const react_if_1 = require("react-if");
const Themes_1 = require("../../Themes");
const Components_1 = require("../../Components");
const SvgIcons_1 = require("../SvgIcons");
const Utils_1 = require("../../Utils");
const IconWithTextContainer = native_1.default(react_native_1.TouchableOpacity) `
  flex-direction: row;
  padding-horizontal: ${(props) => ramda_1.propOr(Themes_1.Metrics.smallMargin, 'paddingHorizontal', props)};
  padding-vertical: ${(props) => ramda_1.propOr(Themes_1.Metrics.smallMargin, 'paddingVertical', props)};
  padding-top: ${(props) => ramda_1.propOr(0, 'paddingTop', props)};
  padding-bottom: ${(props) => ramda_1.propOr(0, 'paddingBottom', props)};
`;
const IconForText = (props) => {
    const { useSvgIcon = false, useCustomIcon = false, iconColor, icon, iconSize = 'small', } = props;
    return (<react_if_1.Switch>
      <react_if_1.Case condition={useSvgIcon}>
        <Components_1.IconWithBadge iconStyle={{
        marginRight: Themes_1.Metrics.smallMargin,
    }} useSvgIcon RenderSvgIcon={() => <SvgIcons_1.ChevronRightSvgIcon fillColor={iconColor}/>}/>
      </react_if_1.Case>
      <react_if_1.Case condition={useCustomIcon}>
        <Components_1.IconWithBadge useCustomIcon iconStyle={{
        marginRight: Themes_1.Metrics.smallMargin,
    }} customIconSource={icon} iconSize={iconSize}/>
      </react_if_1.Case>
      <react_if_1.Default>
        <Components_1.IconWithBadge iconStyle={{
        marginRight: Themes_1.Metrics.baseMargin,
        height: Themes_1.Metrics.doubleBaseMargin + 2,
    }} color={iconColor} name={icon} iconSize={iconSize}/>
      </react_if_1.Default>
    </react_if_1.Switch>);
};
const IconWithText = (props) => {
    const { text = '', onLinkPress, textColor = Themes_1.Colors.black, fontSize = Themes_1.Fonts.size.small, fontWeight = '300', paddingVertical = 0, paddingHorizontal = 0, textPaddingTop = 2, containerPaddingTop = 0, containerPaddingBottom = 0, width = Themes_1.Metrics.screenWidth - Themes_1.Metrics.doubleBaseMargin * 3, textStyle, suffix = false, } = props;
    return (<IconWithTextContainer onPress={onLinkPress} 
    //hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
    disabled={Utils_1.isEmptyOrNil(onLinkPress)} paddingTop={containerPaddingTop} paddingBottom={containerPaddingBottom} paddingHorizontal={paddingHorizontal} paddingVertical={paddingVertical}>
      <react_if_1.If condition={!suffix}>{IconForText(props)}</react_if_1.If>
      <Components_1.AppText style={textStyle} paddingTop={textPaddingTop} paddingRight={Themes_1.Metrics.smallMargin} fontWeight={fontWeight} fontSize={fontSize} color={textColor} width={width} numberOfLines={2}>
        {text}
      </Components_1.AppText>
      <react_if_1.If condition={suffix}>{IconForText(props)}</react_if_1.If>
    </IconWithTextContainer>);
};
exports.default = IconWithText;
//# sourceMappingURL=IconWithText.js.map