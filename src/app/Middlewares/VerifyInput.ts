import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";

export const VerifyInput = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};
