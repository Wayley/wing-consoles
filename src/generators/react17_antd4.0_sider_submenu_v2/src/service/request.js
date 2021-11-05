import { $Message } from '../utils/method';
import { CodeType } from '../config';
export const request = async (service, apiName, params) => {
  if (Object.hasOwnProperty.call(service, apiName)) {
    try {
      const response = await service[apiName](params);
      if (response) {
        const { code, data, message } = response;
        if (CodeType.isSuccess(code)) {
          return data || '';
        } else {
          $Message.error(message || 'Request Failed.');
        }
      }
    } catch (error) {
      $Message.error(error.message);
    }
  } else {
    $Message.error(`There is no ${apiName} method in this service.`);
  }
};

export default request;
