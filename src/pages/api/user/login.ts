import type { NextApiRequest, NextApiResponse } from "next";
import  auth  from "@/server/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(404).json({ error: "Not found" });
  const { username, password } = req.body;
  if (typeof username !== "string" || typeof password !== "string") return res.status(400).json({});
  try {
    const authRequest = auth.handleRequest({ req, res });
    const key = await auth.useKey("username", username, password);
    const session = await auth.createSession(key.userId);
    authRequest.setSession(session); // set cookie
    return res.status(200).json(session); // redirect to profile page
  } catch (e) {
    // invalid username/password
    return res.status(400).json(e);
  }
}
