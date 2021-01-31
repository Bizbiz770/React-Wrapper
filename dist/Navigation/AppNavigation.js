"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const stack_1 = require("@react-navigation/stack");
const Screens_1 = require("../Screens");
const Services_1 = require("../Services");
const Stack = stack_1.createStackNavigator();
const AppStack = () => {
    Services_1.initAPIConfig({ isLoggedIn: false, authToken: null });
    return (<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'HomeScreen'}>
      <Stack.Screen name="HomeScreen" component={Screens_1.HomeScreen}/>
    </Stack.Navigator>);
};
exports.default = AppStack;
//# sourceMappingURL=AppNavigation.js.map