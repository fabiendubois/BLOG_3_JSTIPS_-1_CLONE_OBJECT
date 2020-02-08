var _ = require('lodash');

let catA = {
    identity: {
        name: "Figaro",
        movie: "Pinnochio"
    },
    color: "Black and White",

    meow() {
        console.log(`${this.identity.name} meows !!`)
    }
};

let catB = _.cloneDeep(catA);

console.log('catA : ', catA);
/*
catA :  {
    identity: { name: 'Figaro', movie: 'Pinnochio' },
    color: 'Black and White',
    meow: [Function: meow]
  }
*/

console.log('catB : ', catB);
/*
catB :  {
    identity: { name: 'Figaro', movie: 'Pinnochio' },
    color: 'Black and White',
    meow: [Function: meow]
  }
*/

catB.identity.name = "Garfield"

console.log('catA : ', catA.identity.name); // catA :  Figaro
console.log('catB : ', catB.identity.name); // catB :  Garfield