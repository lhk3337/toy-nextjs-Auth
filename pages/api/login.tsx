import db from "../../lib/db";
import { withApiSession } from "../../lib/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../lib/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  const data = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!data) return res.status(404).end();
  req.session.user = {
    id: data.id,
  };

  await req.session.save();
  res.json({
    ok: true,
  });
  return res.status(200).end();
}

export default withApiSession(withHandler("POST", handler));
