(function () {
    'use strict';
    const one = document.getElementById('one');
    let counter = 2;

    one.addEventListener('click', buttonClickedAdd);

    function buttonClickedAdd() {
        const myNewButton = document.createElement('button');
        myNewButton.innerHTML = counter++;

        document.body.appendChild(myNewButton);
        myNewButton.addEventListener("click", buttonClickedAdd);
    }
}());