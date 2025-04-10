import axios from "axios";
import https from "https";

// getAxiosInstance creates an axios instance, rejectUnauthorized will reject the SSL certificate and work on TCP
export function getAxiosInstance(){
    return axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        })
    })
}