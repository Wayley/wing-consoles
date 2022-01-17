import Cookies from 'js-cookie';

export const cookie = Cookies;

export const _cookie = Cookies.withAttributes({
  path: process.env.VUE_APP_PUBLIC_PATH,
  expires: 1, // as day
});

export default Cookies;
