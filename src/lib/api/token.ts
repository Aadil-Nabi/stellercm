import axios from 'axios';
import https from 'https';

interface CipherTrustToken {
  data: {
    jwt: string;
    duration: number;
    token_type: string;
    client_id: number;
    refresh_token_id: string;
    refresh_token: string;
  };
}

const url = 'https://192.168.238.133/api/v1/auth/tokens';

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export async function getTokenFromCipherTrust(): Promise<CipherTrustToken> {
  let response: CipherTrustToken;

  try {
    response = await axiosInstance.post(url, {
      grant_type: 'password',
      username: 'admin',
      password: 'Asdf@1234',
    });
    // console.log(response);
  } catch (error) {
    throw new Error('Unable to get Token from the thales ciphertrust manager');
  }

  return response;
}
