import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './index.less';
export default function AppSpin({ fontSize }) {
  fontSize = fontSize || 32;
  return (
    <div className="global-component-spin">
      <Spin indicator={<LoadingOutlined style={{ fontSize }} spin />} />
    </div>
  );
}
