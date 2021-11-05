import { Tabs } from 'antd';
import './index.less';
export const TabPane = Tabs.TabPane;
export default function AppTabs({ children, ...rest }) {
  return (
    <div className="global-component-tabs">
      <Tabs type="card" {...rest}>
        {children}
      </Tabs>
    </div>
  );
}
