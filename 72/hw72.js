(function () {
    'use strict';

    setInterval(
        function () {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        }, 3000);


    let setIntervalId;
    const start = document.getElementById('start');

    start.addEventListener('click', function onClick() {
        setIntervalId = setInterval(function () {
        }, 1000);

    });

    const stop = document.getElementById('stop');
    stop.addEventListener('click', function onClick() {
        clearInterval(setIntervalId);
    });

})();
