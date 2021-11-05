import { useParams } from 'react-router-dom';
export default function AccountEdit() {
  const { id } = useParams();
  return <div>Account Edit：{id}</div>;
}
