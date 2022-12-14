import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../lib/withHandler";
import db from "../../lib/db";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, name } = req.body;
  await db.user.create({
    data: {
      email,
      name,
    },
  });

  res.status(200).end();
}
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.json(await client.user.findMany());
// }
export default withHandler("POST", handler);
