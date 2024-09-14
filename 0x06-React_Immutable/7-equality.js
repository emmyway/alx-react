import { Map } from 'immutable';

// Define two Immutable Maps
const map1 = Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

const map2 = Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

// Check if the Maps are equal
console.log(areMapsEqual(map1, map2)); // Output: true

// Modify one of the maps
const map3 = Map({
  firstName: 'Guillaume',
  lastName: 'Smith',
});

console.log(areMapsEqual(map1, map3)); // Output: false
