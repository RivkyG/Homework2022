'use strict';

function Transaction(amount) {
    this.balanceProperty = this.balanceProperty + amount;
}


const bankAccount1 = {
    balanceProperty: 0,

    performTransaction: function (amount) {
        this.balanceProperty = this.balanceProperty + amount;
    }
};

const bankAccount2 = {
    balanceProperty: 0,

    performTransaction: function (amount) {
        this.balanceProperty = this.balanceProperty + amount;
    }
}

const depositFiftyInSavings = Transaction.bind(bankAccount1, 50);

depositFiftyInSavings();