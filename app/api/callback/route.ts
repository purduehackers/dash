import { NextResponse } from "next/server";

export interface IDAuthResponse {
    access_token: string;
    token_type: "bearer";
    expires_in: number;
    scope: string;
}

export async function GET(req: Request) {
  const code = req.url.split("=")[1];
  console.log('code: ' + code)
  const destinationUrl = new URL("/", new URL(req.url).origin);
  console.log('dest: ' + destinationUrl);
  const response = NextResponse.redirect(destinationUrl);
  console.log('response: ' + response);

  if (code && code !== "") {
    let URL = "dash.purduehackers.com";
    //URL = "localhost:3000";
    const resp = await fetch("https://id.purduehackers.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            client_id: "dashboard",
            redirect_uri: `https://${URL}/api/callback`,
        }).toString(),
    })
        .then((r) => r.json())
        .catch((err) => console.error("Error posting to id", err));

    if (resp["access_token"]) {
        const authDetails = resp as IDAuthResponse;
        response.cookies.set("phIdAccessToken", authDetails.access_token);
        response.cookies.set("phIdTokenType", authDetails.token_type);
        response.cookies.set("phIdExpiresIn", String(authDetails.expires_in));
        response.cookies.set("phIdScopes", authDetails.scope);

        return response;
    } else {
        return response;
    }
  } else {
    return response;
  }
}