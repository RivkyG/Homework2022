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

// SL - this is not at all what I asked for. I asked you to implement a mapping function on your own NOT use the built in one