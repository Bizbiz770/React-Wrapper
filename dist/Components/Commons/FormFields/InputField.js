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
const react_native_elements_1 = require("react-native-elements");
const native_1 = __importDefault(require("styled-components/native"));
const ramda_1 = require("ramda");
const react_if_1 = require("react-if");
const react_native_1 = require("react-native");
const Themes_1 = require("../../../Themes");
const AppStyledComponents_1 = require("../AppStyledComponents");
const InputContainer = native_1.default(react_native_1.View) `
  margin-top: ${(props) => ramda_1.propOr('0px', 'marginTop')(props)};
  margin-bottom: ${(props) => ramda_1.propOr('0px', 'marginBottom')(props)};
  padding-horizontal: ${(props) => ramda_1.propOr(0, 'paddingHorizontal')(props)};
  flex-direction: row;
  height: 55;
  align-items: center;
  justify-content: center;
  background-color: ${Themes_1.Colors.white};
  border-width: 1;
  border-radius: ${Themes_1.Metrics.smallMargin};
  border-color: ${Themes_1.Colors.borderColor};
`;
const InputErrorContainer = native_1.default(react_native_1.View) `
  margin-top: ${(props) => ramda_1.propOr('0px', 'marginTop')(props)};
  margin-bottom: ${(props) => ramda_1.propOr('0px', 'marginBottom')(props)};
  flex-direction: row;
  justify-content: space-between;
`;
const InputErrorText = native_1.default(AppStyledComponents_1._Text) `
  color: ${Themes_1.Colors.error};
  font-size: ${Themes_1.Fonts.size.small};
  font-family: TTCommons-Regular;
`;
const InputField = (props) => {
    const { label = '', placeholder = '', value = '', disabled = false, onChangeHandler, onBlurHandler = () => { }, onSubmitEditing = () => { }, errorMessage = '', showPrefix = false, PrefixComponent = () => <></>, secureTextEntry = false, keyboardType = 'default', autoCapitalize = 'none', showInputLinkComponent = false, InputLinkComponent = () => <></>, multiLine = false, 
    //styling props
    inputFieldStyle = {
        marginTop: Themes_1.Metrics.doubleBaseMargin,
        width: Themes_1.Metrics.screenWidth / 1.5,
    }, disabledInputStyle = {}, } = props;
    const ShowPrefixComponent = () => (showPrefix ? <PrefixComponent /> : null);
    const inputFieldRef = React.useRef(null);
    return (<react_native_1.View style={inputFieldStyle}>
      <InputContainer>
        <react_native_elements_1.Input ref={inputFieldRef} 
    //label={label}
    inputStyle={{
        fontSize: Themes_1.Fonts.size.medium,
        fontFamily: 'TTCommons-DemiBold',
        textTransform: 'capitalize',
        textAlign: 'center',
    }} disabled={disabled} disabledInputStyle={disabledInputStyle} placeholder={placeholder} value={value} leftIcon={() => ShowPrefixComponent()} leftIconContainerStyle={{
        left: -Themes_1.Metrics.screenHorizontalPadding + 5,
        position: 'absolute',
        top: react_native_1.Platform.OS === 'android' ? Themes_1.Metrics.smallMargin : 0,
    }} onChangeText={onChangeHandler} onSubmitEditing={onSubmitEditing} onBlur={onBlurHandler} 
    // errorMessage={errorMessage}
    secureTextEntry={secureTextEntry} keyboardType={keyboardType} autoCapitalize={autoCapitalize} multiline={multiLine} inputContainerStyle={{
        // borderBottomColor: !isEmptyOrNil(errorMessage)
        //   ? Colors.primary
        //   : Colors.darkGrey,
        borderBottomWidth: 0,
        paddingLeft: showPrefix ? Themes_1.Metrics.baseMargin + 3 : 0,
    }} maxFontSizeMultiplier={1.1} returnKeyType={multiLine ? 'default' : 'done'}/>
      </InputContainer>
      <InputErrorContainer marginTop="5px" marginBottom={`${Themes_1.Metrics.doubleBaseMargin}px`}>
        <react_native_1.View style={{ flex: 1 }}>
          <react_if_1.If condition={!ramda_1.isEmpty(errorMessage)}>
            <InputErrorText>{errorMessage}</InputErrorText>
          </react_if_1.If>
        </react_native_1.View>
        <react_if_1.If condition={showInputLinkComponent}>
          <react_native_1.View style={{ marginTop: Themes_1.Metrics.doubleBaseMargin }}>
            <InputLinkComponent />
          </react_native_1.View>
        </react_if_1.If>
      </InputErrorContainer>
    </react_native_1.View>);
};
exports.default = InputField;
//# sourceMappingURL=InputField.js.map