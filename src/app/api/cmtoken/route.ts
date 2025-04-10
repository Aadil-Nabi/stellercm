import {NextRequest, NextResponse} from "next/server";
import {getAxiosInstance} from "@/lib/utility";

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

// get axios instance
const axiosInstance = getAxiosInstance()

export  async function POST(request: NextRequest){
    const body = await request.json();

    try {
        const res: CipherTrustToken = await axiosInstance.post(`${body.cmUrl}/api/v1/auth/tokens`, {
            grant_type: "password",
            username: body.username,
            password: body.password,
        }, {
            headers:{
                "Content-Type": "application/json",
            }
        });
        console.log("Response from the route.ts.................",res.data.jwt);

        return NextResponse.json(res.data);
    } catch (error) {
        console.log(error);
        // return NextResponse.json(error.response.data )
    }
}