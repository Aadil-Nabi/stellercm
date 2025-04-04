import { getTokenFromCipherTrust } from '@/lib/api/token';

export default async function HomePage() {
  const response = await getTokenFromCipherTrust();
  console.log('Response is : ', response.data.jwt);
  return (
    <>
      <div>StellerCM</div>
      <div>{response.data.jwt}</div>
    </>
  );
}
