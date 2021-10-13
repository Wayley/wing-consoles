import { useParams } from 'react-router-dom';
export default function RoleEdit() {
  const { id } = useParams();
  return <div>Role Edit：{id}</div>;
}
