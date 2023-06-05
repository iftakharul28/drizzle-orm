
import type { NextApiRequest, NextApiResponse } from "next";
import  auth  from "@/server/auth";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(404).json({ error: "Not found" });
  const authRequest = auth.handleRequest({ req, res });
  const { session } = await authRequest.validateUser();
  if (!session) return res.status(401).json({ error: "Unauthorized" });
  await auth.invalidateSession(session.sessionId);
  authRequest.setSession(null); // setting to null removes cookie
  return res.status(200).json("success");
};
