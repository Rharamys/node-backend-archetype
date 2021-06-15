import { Utils } from '../app/Utils'

describe('Utils test suite', () => {

    beforeAll(() => {
        console.log("before all")
    })

    beforeEach(() => {
        console.log("before each")
    })

    test('First test', () => {
        const result = Utils.toUpperCase("abc");
        expect(result).toBe("ABC")
    });

    test('Parse simple url test', () => {
        const parsedUrl = Utils.parseUrl("http://localhost:8080/login");
        //toBe to test primitive attributes
        expect(parsedUrl.href).toBe("http://localhost:8080/login");
        expect(parsedUrl.port).toBe("8080");
        expect(parsedUrl.protocol).toBe("http:");
        //toEqual to test objects
        expect(parsedUrl.query).toEqual({});
    });

    test('Parse url with query test', () => {
        const parsedUrl = Utils.parseUrl("http://localhost:8080/login?user=chico&password=none");
        const expectedQuery = {
            user: "chico",
            password: "none"
        }
        expect(parsedUrl.query).toEqual(expectedQuery);
    });

    test.todo('Test not implemented yet')
});