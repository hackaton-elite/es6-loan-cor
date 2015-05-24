class LoanEntity {
    getValue() {
        return this.value;
    }

    constructor(value = 0) {
        if (0 === value) {
            throw("Must provide a value for the Loan.");
        }

        this.value = value;
    }
}

module.exports = LoanEntity;
