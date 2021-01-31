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
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const yup = __importStar(require("yup"));
const react_redux_1 = require("react-redux");
const Actions_1 = require("../../Actions");
const Commons_1 = require("../Commons");
const FormFields_1 = require("../Commons/FormFields");
const Themes_1 = require("../../Themes");
const cityFormValidations = () => {
    return yup.object().shape({
        city: yup.string().required('City name is required.'),
    });
};
const HomeSearchCityForm = () => {
    const dispatch = react_redux_1.useDispatch();
    const cityFormInitialValues = { city: '' };
    const getCityData = async (params) => {
        const { city } = params;
        await dispatch(Actions_1.emptyCityWeatherReportList());
        await dispatch(Actions_1.getCityWeatherReport(city));
    };
    return (<formik_1.Formik initialValues={cityFormInitialValues} onSubmit={(values) => getCityData(values)} validationSchema={cityFormValidations}>
      {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, setFieldValue, }) => (<>
          <FormFields_1.FormikInputField fieldName={'city'} fieldProps={{
        value: values.city,
        onChangeHandler: handleChange('city'),
        onBlurHandler: () => setFieldTouched('city'),
        placeholder: 'Enter city',
        keyboardType: 'default',
        errorMessage: touched.city && errors.city ? errors.city : '',
    }}/>
          <Commons_1.PrimaryButton fullWidth={false} width={Themes_1.Metrics.screenWidth / 2} disabled={!isValid} buttonColor={Themes_1.Colors.primary} buttonLabel="Have a look" onClickHandler={handleSubmit}/>
        </>)}
    </formik_1.Formik>);
};
exports.default = HomeSearchCityForm;
//# sourceMappingURL=HomeSearchCityForm.js.map