import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.q) {
    throw new HTTP400Error("Missing q parameter");
  } else if (req.query.q.split(" ").length !== 2) {
    throw new HTTP400Error(
      "Invalid search parameters, q should contain make & model separated by space"
    );
  } else {
    next();
  }
};
