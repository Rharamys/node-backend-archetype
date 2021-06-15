import { Utils } from '../app/Utils'

describe('Utils test suite', () => {
    test('First test', () => {
        const result = Utils.toUpperCase("abc");
        expect(result).toBe("ABC")
    })
})