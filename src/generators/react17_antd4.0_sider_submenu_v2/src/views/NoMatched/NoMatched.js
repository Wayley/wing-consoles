import { Redirect, useRouteMatch } from 'react-router-dom';
export function NotFound() {
  const { url } = useRouteMatch();
  return (
    <Redirect
      to={{
        pathname: '/404',
        search: `?from=${url}`,
      }}
    />
  );
}

export default function NoMatched() {
  return <div className="no-matched">404</div>;
}
