import axios from 'axios'; // external library used to perform HTTP requests (POST, GET, PUT, DELETE) on server.
import https from 'https';

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

// Create an axios instance, rejectUnauthorized will reject the SSL certificate and work on TCP
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

// getTokenFromCipherTrust to get the JWT from the CipherTrust Manager.
export async function getTokenFromCipherTrust(cmUrl: string, cm_user: string, cm_password: string ) {
  // let response: CipherTrustToken;

  try {
    const response = await axiosInstance.post("api/cmtoken", {
        grant_type: "password",
        cmUrl: cmUrl,
        username: cm_user,
        password: cm_password,

    });
    console.log("Response from the token.ts.................",response);

  } catch (error) {
    console.log(error);
    // throw new Error('Unable to get Token from the thales ciphertrust manager');
  }

}
