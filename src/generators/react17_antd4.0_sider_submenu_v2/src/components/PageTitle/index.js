import './index.less';
export default function PageTitle({ title, children }) {
  return (
    <div className="global-component-page-title-wrapper">
      <div className="global-component-page-title">{title}</div>
      {children && <div style={{ flex: 1 }}>{children}</div>}
    </div>
  );
}
