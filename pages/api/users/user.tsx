import db from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await db.user.findMany();
  res.json(data);
  res.status(200).end();
}
