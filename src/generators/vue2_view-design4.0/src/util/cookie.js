import JS_COOKIE from 'js-cookie';

const path = process.env.VUE_APP_PUBLIC_PATH;
const expires = 1; // as day

export const INSTANCE = JS_COOKIE.withAttributes({ path, expires });

export const removeAll = () => {
  Object.keys(JS_COOKIE.get()).forEach((key) => {
    JS_COOKIE.remove(key, { path });
  });
};
export const multipleSet = (data = {}) => {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      JS_COOKIE.set(key, data[key], { path, expires });
    }
  }
};

export const _cookie = JS_COOKIE;

export default _cookie;
