import { Request, Response } from "express";
import { getCarsByName } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";

export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams,
      async ({ query }: Request, res: Response) => {
        const result = await getCarsByName(query.q);
        res.status(200).send(result);
      }
    ]
  }
];
