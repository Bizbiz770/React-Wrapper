"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_2 = require("react");
const native_1 = require("@react-navigation/native");
const react_redux_1 = require("react-redux");
const netinfo_1 = __importDefault(require("@react-native-community/netinfo"));
const react_if_1 = require("react-if");
const Navigation_1 = require("./Navigation");
const Services_1 = require("./Services");
const Constants_1 = require("./Constants");
const store_1 = __importDefault(require("./Redux/store"));
const Components_1 = require("./Components");
const AppContainer = (props) => {
    const { isAppError } = props;
    const ref = react_1.default.useRef(null);
    react_1.default.useEffect(() => {
        Services_1.NavigationService.setTopLevelNavigator(ref);
    });
    return (<react_2.Fragment>
      <Components_1.AppErrorBoundary>
        <react_if_1.If condition={isAppError}>
          <react_if_1.Then>
            <native_1.NavigationContainer ref={ref}>
              <Navigation_1.AppNavigator />
            </native_1.NavigationContainer>
          </react_if_1.Then>
          <react_if_1.Else>
            <react_native_1.View style={{ flex: 1 }}>
              <Components_1.AppErrorDialog isModalVisible={!isAppError} errorMessage={Constants_1.APP_CONSTANTS.APP_ERROR_MESSAGE} title="Technical Difficulties" showButton={false}/>
            </react_native_1.View>
          </react_if_1.Else>
        </react_if_1.If>
      </Components_1.AppErrorBoundary>
    </react_2.Fragment>);
};
const App = () => {
    const [isConnected, toggleNetwork] = react_1.default.useState(false);
    const handleConnectivityChange = async () => {
        const checkConnectivity = await netinfo_1.default.fetch();
        const { isConnected } = checkConnectivity;
        toggleNetwork(isConnected);
    };
    react_1.default.useEffect(() => {
        netinfo_1.default.addEventListener((change) => handleConnectivityChange());
        if (__DEV__)
            react_native_1.LogBox.ignoreLogs([
                'Expected style',
                'Require cycle: src/Components/index.ts',
            ]);
    }, [isConnected]);
    return (<>
      <react_redux_1.Provider store={store_1.default}>
        <react_native_1.StatusBar barStyle="dark-content"/>
        <react_native_1.SafeAreaView style={{ flex: 1 }}>
          <Components_1.AppScreenLoader />
          <AppContainer isAppError={isConnected}/>
        </react_native_1.SafeAreaView>
      </react_redux_1.Provider>
    </>);
};
exports.default = App;
//# sourceMappingURL=App.js.map