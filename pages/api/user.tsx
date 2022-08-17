import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../lib/withSession";
import withHandler from "../../lib/withHandler";
import db from "../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user?.id) {
    return res.status(404).end();
  }
  const data = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });
  if (!data) {
    return res.status(404).end();
  }

  return res.json(data);
}

export default withApiSession(withHandler("GET", handler));
