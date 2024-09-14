import { Map } from 'immutable';

// Create an immutable Map with the given object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create a second constant map2, which modifies the values for index 2 and 4
export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');
