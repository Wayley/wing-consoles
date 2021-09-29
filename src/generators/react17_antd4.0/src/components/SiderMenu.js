import { Link } from 'react-router-dom';

export default function SiderMenu({ list }) {
  return (
    <ul>
      {list.map((menu) => {
        const { path, title } = menu;
        return (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
