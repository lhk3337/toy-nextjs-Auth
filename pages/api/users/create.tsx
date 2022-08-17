import { NextApiRequest, NextApiResponse } from "next";

import db from "../../../lib/db";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(401).end();
  }

  await db.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  });
  res.status(200).end();
}
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.json(await client.user.findMany());
// }
