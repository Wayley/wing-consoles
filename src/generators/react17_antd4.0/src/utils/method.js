import { message } from 'antd';

// 为了避免API返回的message字段与antd的message组件命名冲突
export const $Message = message;

const method = { $Message };
export default method;
