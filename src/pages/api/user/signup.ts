import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(404).json({ error: "Not found" });
  const { name, password, email, role } = req.body;
  if (typeof name !== "string" || typeof password !== "string") return res.status(400).json({});
  const authRequest = auth.handleRequest({ req, res });
  try {
    const user = await auth.createUser({
      primaryKey: {
        providerId: "email",
        providerUserId: name,
        password,
      },
      attributes: {
        name,
        email,
        role,
      },
    });
    const session = await auth.createSession(user.userId);
    authRequest.setSession(session); // set cookies
    return res.status(201).json(session); // redirect user on account creations
  } catch (e) {
    // username taken
    return res.status(400).json(e);
  }
}
