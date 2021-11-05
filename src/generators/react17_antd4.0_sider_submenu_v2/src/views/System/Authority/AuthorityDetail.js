import { useParams } from 'react-router-dom';
export default function AuthorityDetail() {
  const { id } = useParams();
  return <div>Authority Detail：{id}</div>;
}
