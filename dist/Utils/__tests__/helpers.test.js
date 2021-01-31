"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
test('Capitalize first character of the string or word', () => {
    expect(helpers_1.capitalizeFirstLetter('ucm')).toBe('Ucm');
});
test('Change complete date to day and date', () => {
    expect(helpers_1.formatWeatherDate('2021-01-30 21:00:00')).toBe('Sat, 01.30.2021');
});
describe('EmtyOrNull function use-cases', () => {
    test('if string is empty', () => {
        expect(helpers_1.isEmptyOrNil('')).toBe(true);
    });
    test('if string is not empty', () => {
        expect(helpers_1.isEmptyOrNil('Ucm App')).toBe(false);
    });
    test('if object is empty', () => {
        expect(helpers_1.isEmptyOrNil({})).toBe(true);
    });
    test('if string is not empty', () => {
        expect(helpers_1.isEmptyOrNil({ name: 'Ucm App' })).toBe(false);
    });
    test('if array is empty', () => {
        expect(helpers_1.isEmptyOrNil([])).toBe(true);
    });
    test('if array is not empty', () => {
        expect(helpers_1.isEmptyOrNil([{ name: 'Ucm App' }])).toBe(false);
    });
    test('if null is nill', () => {
        expect(helpers_1.isEmptyOrNil(null)).toBe(true);
    });
    test('if undefined is not nil', () => {
        expect(helpers_1.isEmptyOrNil(undefined)).toBe(true);
    });
});
describe('Sort array both ascending and descending', () => {
    const dumySort = [{
            id: 5,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
    ];
    test('Ascending order sort', () => {
        expect(helpers_1.sortListByKey('asc', 'id')(dumySort)).toEqual([{ "id": 2 }, { "id": 3 }, { "id": 5 }]);
    });
    test('Descending order sort', () => {
        expect(helpers_1.sortListByKey('desc', 'id')(dumySort)).toEqual([{ "id": 5 }, { "id": 3 }, { "id": 2 }]);
    });
});
describe('Verify empty properties in object', () => {
    const dumyObjWithEmptyEntry = {
        id: 5,
        name: "",
        company: "Ucm"
    };
    const dumyObjWithNoEmptyEntry = {
        id: 5,
        name: "Test",
        company: "Ucm"
    };
    test('If any property is empty in object with an empty entry if no entry is ommited from object ', () => {
        expect(helpers_1.isAnyPropertyEmptyInObject(dumyObjWithEmptyEntry, [])).toEqual(true);
    });
    test('If any property is empty in object with zero empty entry if no entry is ommited from object ', () => {
        expect(helpers_1.isAnyPropertyEmptyInObject(dumyObjWithNoEmptyEntry, [])).toEqual(false);
    });
    test('If any property is empty in object with an empty entry if empty entry is ommited from object ', () => {
        expect(helpers_1.isAnyPropertyEmptyInObject(dumyObjWithEmptyEntry, ['name'])).toEqual(false);
    });
    test('If any property is empty in object with zero empty entry if filled entry is ommited from object ', () => {
        expect(helpers_1.isAnyPropertyEmptyInObject(dumyObjWithNoEmptyEntry, ['id'])).toEqual(false);
    });
});
describe('Change key name in object', () => {
    const dumyObj = {
        id: 5,
        name: "",
        company: "Ucm"
    };
    test('If multiple keys names can be changed', () => {
        expect(helpers_1.renameKeysInObject({ company: "companyName", name: "fullName" })(dumyObj)).toEqual({ "companyName": "Ucm", "id": 5, "fullName": "" });
    });
    test('If single key name can be changed', () => {
        expect(helpers_1.renameKeysInObject({ company: "companyName" })(dumyObj)).toEqual({ "companyName": "Ucm", "id": 5, "name": "" });
    });
});
describe('Rename keys of list of objects', () => {
    const dumyObj = [{
            id: 5,
            name: "",
            company: "Ucm"
        }, {
            id: 6,
            name: "Test",
            company: "Ucm App"
        }];
    test('If single key name can be changed', () => {
        expect(helpers_1.renameKeysInList({ company: "companyName" }, dumyObj)).toEqual([{ companyName: "Ucm", id: 5, name: "" }, { "companyName": "Ucm App", "id": 6, "name": "Test" }]);
    });
});
//# sourceMappingURL=helpers.test.js.map