// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type dataResponse ={
  name: string;
  success: boolean;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<dataResponse>) {
  res.status(200).json({ name: 'John Doe', success: true });
}
