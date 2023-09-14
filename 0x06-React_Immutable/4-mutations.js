import { Map } from 'immutable';

// Create the initial map
const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Modify values in the map to create map2
const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

export { map, map2 };