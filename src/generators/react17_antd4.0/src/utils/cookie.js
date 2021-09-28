import { get, set, remove } from 'js-cookie';

/* ****************** Cookie Attribute ****************** */
const expires = 0.5; // as day
const path = '';

const cookie = {
  set: (key, value) => {
    return set(key, value, { expires, path });
  },
  multipleSet: (data = {}) => {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const value = data[key];
        set(key, value, { expires, path });
      }
    }
  },
  get: (key) => {
    return get(key, { path });
  },
  remove: (key) => {
    return remove(key, { path });
  },
  removeAll: () => {
    Object.keys(get()).forEach((key) => {
      remove(key, { path });
    });
  },
  update: (key, value) => {
    return set(key, value, { expires, path });
  },
};
export default cookie;
