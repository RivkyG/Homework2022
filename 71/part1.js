(function () {
    'use strict';

    let users = [
        { firstName: "Donald", lastName: "Trump" },
        { firstName: "Joe", lastName: "Biden" },
        { firstName: "Harry", lastName: "Truman" }
    ];

    let userFullnames = users.map(function (element) {
        return `${element.firstName} ${element.lastName}`;
    });

    console.log(userFullnames);
}());