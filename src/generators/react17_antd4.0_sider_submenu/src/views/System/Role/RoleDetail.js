import { useParams } from 'react-router-dom';
export default function RoleDetail() {
  const { id } = useParams();
  return <div>Role Detail：{id}</div>;
}
