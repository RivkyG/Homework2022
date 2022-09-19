(function () {
    'use strict';

    function fetchNames(nameType) {
        return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
    }


    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    async function generateName(gender) {
        try {
            const response = await Promise.all([
                fetchNames(gender || pickRandom(['male', 'female'])),
                fetchNames('surnames')
            ]);

            const [firstNames, lastNames] = response;

            const firstName = pickRandom(firstNames.data);
            const lastName = pickRandom(lastNames.data);

            return `${firstName} ${lastName}`;
        } catch (error) {
            console.error('Unable to generate name:', error);
        }

    }
    generateName('female').then(console.log('first:' ${ female } + 'last:' ${ surnames } + 'first:' ${ male } + 'last:' ${ surnames }));
    generateName('male').then(console.log('first:' ${ male } + 'last:' ${ surnames } + 'first:' ${ female } + 'last:' ${ surnames }));
})();