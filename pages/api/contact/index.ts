// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

type Data = {
  name: string;
  email: string;
  phone: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, name, phone }: Data = req.body;

  const contactFound = await prisma.contact.findUnique({
    where: { email },
  });

  console.log("contactFound", contactFound);
  if (contactFound) return res.json(contactFound);

  const result = await prisma.contact.create({
    data: {
      email: email,
      name: name,
      phone,
    },
  });
  res.json(result);
}
