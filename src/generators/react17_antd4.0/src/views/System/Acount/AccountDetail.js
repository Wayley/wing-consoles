import { useParams } from 'react-router-dom';
export default function AccountDetail() {
  const { id } = useParams();
  return <div>Account Detail：{id}</div>;
}
