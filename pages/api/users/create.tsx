import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import withHandler from "../../../lib/withHandler";
import db from "../../../lib/db";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.session);
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
export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "userSession",
  password: "4820384423075039852037242307503985203724230750398520372230750398520372",
});
