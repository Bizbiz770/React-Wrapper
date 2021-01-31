"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const NewAppScreen_1 = require("react-native/Libraries/NewAppScreen");
const App = () => {
    return (<>
      <react_native_1.StatusBar barStyle="dark-content"/>
      <react_native_1.SafeAreaView>
        <react_native_1.ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <NewAppScreen_1.Header />
          {global.HermesInternal == null ? null : (<react_native_1.View style={styles.engine}>
              <react_native_1.Text style={styles.footer}>Engine: Hermes</react_native_1.Text>
            </react_native_1.View>)}
          <react_native_1.View style={styles.body}>
            <react_native_1.View style={styles.sectionContainer}>
              <react_native_1.Text style={styles.sectionTitle}>Step One</react_native_1.Text>
              <react_native_1.Text style={styles.sectionDescription}>
                Edit <react_native_1.Text style={styles.highlight}>App.js</react_native_1.Text> to change this
                screen and then come back to see your edits.
              </react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={styles.sectionContainer}>
              <react_native_1.Text style={styles.sectionTitle}>See Your Changes</react_native_1.Text>
              <react_native_1.Text style={styles.sectionDescription}>
                <NewAppScreen_1.ReloadInstructions />
              </react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={styles.sectionContainer}>
              <react_native_1.Text style={styles.sectionTitle}>Debug</react_native_1.Text>
              <react_native_1.Text style={styles.sectionDescription}>
                <NewAppScreen_1.DebugInstructions />
              </react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={styles.sectionContainer}>
              <react_native_1.Text style={styles.sectionTitle}>Learn More</react_native_1.Text>
              <react_native_1.Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </react_native_1.Text>
            </react_native_1.View>
            <NewAppScreen_1.LearnMoreLinks />
          </react_native_1.View>
        </react_native_1.ScrollView>
      </react_native_1.SafeAreaView>
    </>);
};
const styles = react_native_1.StyleSheet.create({
    scrollView: {
        backgroundColor: NewAppScreen_1.Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: NewAppScreen_1.Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: NewAppScreen_1.Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: NewAppScreen_1.Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: NewAppScreen_1.Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
exports.default = App;
//# sourceMappingURL=App.js.map