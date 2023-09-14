import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableObject = Map(object); // Convert the plain object to an immutable Map

  return immutableObject.getIn(array, undefined);
}
