import { useParams } from 'react-router-dom';
export default function AuthorityEdit() {
  const { id } = useParams();
  return <div>Authority Edit：{id}</div>;
}
