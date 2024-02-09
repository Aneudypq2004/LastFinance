import { GetNewId, FormatMoney, FormatDate } from '../../src/Helpers/index';

describe("Helpers Function should", () => {

    test('should return a id with a lenght of 18', () => {

        expect(GetNewId()).toHaveLength(18);
    });

    test('Should return an appropiate format amount in USD', () => {

        // arrange
        const money = FormatMoney(9000);

        // asserts

        expect(money).toEqual("$9,000.00 USD");
    });


    test('should return an appropiate format date', () => {

        const date = new Date(Date.now());

        expect(FormatDate(date)).toBeDefined();
    })
});

