import menus from '../mock/menus';
import cookie from '../utils/cookie';
import { cookieConfig } from '../config';
const { tokenKeyName } = cookieConfig;
export async function getUserMenus() {
  return await new Promise((resolve, reject) => {
    resolve(menus);
  });
}
const basename = '/ids';
export async function login(data) {
  let formData = new FormData();
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      formData.append(key, data[key]);
    }
  }
  return fetch(`${basename}/oauth/token`, {
    method: 'POST',
    body: formData,
  }).then((response) => response.json());
}
export async function logout() {
  let headers = new Headers();
  let token = cookie.get(tokenKeyName);
  headers.append('Authorization', `Bearer ${token}`);
  return fetch(`${basename}/logout`, {
    headers,
    method: 'POST',
  }).then((response) => response.json());
}
