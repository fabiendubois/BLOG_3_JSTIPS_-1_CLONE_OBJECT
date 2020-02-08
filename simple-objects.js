let objectA = {
    "name": "toto"
};

let objectB = objectA;

// avec le spread operator :
// let objectB = {... objectA};

// avec object.assign()
// let objectB =  Object.assign({}, objectA);

console.log('objectA : ', objectA);
// objectA :  { name: 'toto' }
console.log('objectB : ', objectB);
// objectB :  { name: 'toto' }

objectB.name = 'titi';

console.log('objectA : ', objectA);
// objectA :  { name: 'titi' }
console.log('objectB : ', objectB);
// objectB :  { name: 'titi' }

