"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const ramda_1 = require("ramda");
const native_1 = __importDefault(require("styled-components/native"));
const AppStyledComponents_1 = require("./AppStyledComponents");
const react_if_1 = require("react-if");
const Utils_1 = require("../../Utils");
const Themes_1 = require("../../Themes");
const ErrorMessageContainer = native_1.default.View `
  padding-vertical: ${Themes_1.Metrics.baseMargin};
  background-color: ${Themes_1.Colors.chipColor};
  justify-content: center;
  align-items: center;
`;
const ErrorMessage = () => {
    const state = react_redux_1.useSelector((state) => state);
    const errorMessage = ramda_1.pathOr('', ['home', 'errorMessage'], state);
    return (<react_if_1.If condition={!Utils_1.isEmptyOrNil(errorMessage)}>
      <ErrorMessageContainer>
        <AppStyledComponents_1.AppText color={Themes_1.Colors.error} fontWeight={'bold'} textTransform="capitalize" textAlign="center">
          {errorMessage}
        </AppStyledComponents_1.AppText>
      </ErrorMessageContainer>
    </react_if_1.If>);
};
exports.default = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map