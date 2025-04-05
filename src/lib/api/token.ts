import axios from 'axios'; // external library used to perform HTTP requests (POST, GET, PUT, DELETE) on server.
import https from 'https';
import dotenv from 'dotenv'; // external library to load and read env variables.

// interface to define the type of the response received from the ciphertrust manager
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

// Load env variables using dotenv library
dotenv.config();
const cm_user = process.env.CM_USERNAME;
const cm_password = process.env.CM_PASSWORD;
const baseUrl = process.env.BASE_URL;
const version = process.env.VERSION;

// Create an axios instance, rejectUnauthorized will reject the SSL certificate and work on TCP
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

// getTokenFromCipherTrust to get the JWT from the CipherTrust Manager.
export async function getTokenFromCipherTrust(): Promise<CipherTrustToken> {
  let response: CipherTrustToken;

  try {
    response = await axiosInstance.post(`${baseUrl}/${version}/auth/tokens`, {
      grant_type: 'password',
      username: cm_user,
      password: cm_password,
    });
  } catch (error) {
    throw new Error('Unable to get Token from the thales ciphertrust manager');
  }

  return response;
}
