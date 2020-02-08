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


let catB = JSON.parse(JSON.stringify(catA));

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
  color: 'Black and White'
}
*/

catB.identity.name = "Garfield"

console.log('catA : ', catA.identity.name); // catA :  Garfield
console.log('catB : ', catB.identity.name); // catB :  Garfield