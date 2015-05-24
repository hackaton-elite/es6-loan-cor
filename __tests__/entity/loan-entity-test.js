jest.dontMock('../../dist/js/entity/loan-entity.js');

var LoanEntity = require('../../dist/js/entity/loan-entity');

describe('Loan Entity', function () {
    it('will provide access to the loan value once it has been specified', function () {
        var smallLoan = new LoanEntity(130);

        expect(smallLoan.getValue()).toEqual(130);
    });

    it('will throw an error if no loan value is provided', function () {
        expect(function () {
            var undefinedLoan = new LoanEntity()
        }).toThrow();
    });
});
