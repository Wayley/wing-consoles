import { Message } from 'view-design';

export async function request(
  SERVICE,
  METHOD,
  PARAMS,
  SHOW_SUCCESS_MESSAGE = true, // 请求成功时是否展示`message`字段
  FORM_POST = false // 是否是表单`POST`提交
) {
  try {
    if (Object.hasOwnProperty.call(SERVICE, METHOD)) {
      const { code, data, message } = await SERVICE[METHOD](PARAMS, FORM_POST);
      if (code === 200 && data !== undefined) {
        SHOW_SUCCESS_MESSAGE && Message.success(message);
        return data;
      } else {
        Message.error(message);
        return null;
      }
    } else {
      Message.error(`No such method as ${METHOD} in this SEVICE`);
      return null;
    }
  } catch ({ message, response }) {
    Message.error(message);
    const { status } = response;
    if (status === 401 || status === 403) {
      window.app.$router.push({ name: 'login' });
    }
    return null;
  }
}
export default request;
