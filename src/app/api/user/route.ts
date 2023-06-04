import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  return NextResponse.json("Hello, Next.js!");
}

export async function POST(request: Request) {
  const { name, password, email, role } = await request.json();
  if (typeof name !== "string" || typeof password !== "string" || typeof email !== "string" || typeof role !== "string") {
    return NextResponse.json(
      {
        error: "Invalid input",
      },
      {
        status: 400,
      }
    );
  }
  try {
    const user = await auth.createUser({
      primaryKey: {
        providerId: "username",
        providerUserId: name,
        password,
      },
      attributes: {
        name,
        email,
        password,
        role,
      },
    });
    const session = await auth.createSession(user.userId);
    const sessionCookie = auth.createSessionCookie(session);
    // const authRequest = auth.handleRequest({ request, cookies });
    // authRequest.setSession(session);
    // using redirect() ignores cookie
    NextResponse.json(user, {
      status: 302,
    });
  } catch (error) {
    // username taken
    return NextResponse.json(null, {
      status: 400,
    });
  }
}
