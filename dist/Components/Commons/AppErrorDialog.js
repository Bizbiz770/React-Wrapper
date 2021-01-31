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
const native_1 = __importDefault(require("styled-components/native"));
const react_native_modal_1 = __importDefault(require("react-native-modal"));
//import RNExitApp from 'react-native-exit-app';
const Themes_1 = require("../../Themes");
const SvgIcons_1 = require("../SvgIcons");
const AppStyledComponents_1 = require("./AppStyledComponents");
const IconWithBadge_1 = __importDefault(require("./IconWithBadge"));
const PrimaryButton_1 = __importDefault(require("./PrimaryButton"));
const react_if_1 = require("react-if");
const ModalTitleText = native_1.default(AppStyledComponents_1.AppHeading) `
  color: ${Themes_1.Colors.darkSecondary};
  font-size: ${Themes_1.Fonts.size.regular};
  padding: 0;
`;
const ModalTitle = (props) => (<AppStyledComponents_1.RowContainer style={{ marginVertical: Themes_1.Metrics.smallMargin }}>
    <IconWithBadge_1.default iconStyle={{
    marginRight: Themes_1.Metrics.baseMargin,
}} useSvgIcon RenderSvgIcon={() => <SvgIcons_1.ExclamationMarkSvgIcon />}/>
    <ModalTitleText>{props.title}</ModalTitleText>
  </AppStyledComponents_1.RowContainer>);
const ModalContentContainer = native_1.default.View `
  background-color: ${Themes_1.Colors.white};
  position: absolute;
  bottom: ${Themes_1.Metrics.baseMargin};
  padding-horizontal: ${Themes_1.Metrics.baseMargin};
  padding-vertical: ${Themes_1.Metrics.baseMargin};
  border-radius: ${Themes_1.Metrics.baseMargin};
  width: ${Themes_1.Metrics.screenWidth - Themes_1.Metrics.baseMargin * 4};
`;
const AppErrorDialog = (props) => {
    const { isModalVisible = false, title, errorMessage, showButton } = props;
    const [modalVisible, setModalVisible] = React.useState(false);
    React.useEffect(() => setModalVisible(isModalVisible), [isModalVisible]);
    //const exitApp = () => RNExitApp.exitApp();
    return (<react_native_modal_1.default isVisible={modalVisible}>
      <ModalContentContainer>
        
        <ModalTitle title={title}/>

        
        <AppStyledComponents_1.RowContainer>
          <AppStyledComponents_1.AppText>{errorMessage}</AppStyledComponents_1.AppText>
        </AppStyledComponents_1.RowContainer>

        
        <react_if_1.If condition={showButton}>
          <AppStyledComponents_1.RowContainer justifyContent="center">
            <PrimaryButton_1.default buttonLabel="Got it" onClickHandler={() => console.log('exit App')} 
    //onClickHandler={exitApp}
    width={Themes_1.Metrics.screenWidth - Themes_1.Metrics.baseMargin * 7}/>
          </AppStyledComponents_1.RowContainer>
        </react_if_1.If>
      </ModalContentContainer>
    </react_native_modal_1.default>);
};
exports.default = AppErrorDialog;
//# sourceMappingURL=AppErrorDialog.js.map