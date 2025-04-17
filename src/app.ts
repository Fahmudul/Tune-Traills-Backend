import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { GlobalErrorHandler } from "./app/Error/GlobalErrorHandler";
import { AppRoutes } from "./app/Routes";
import { sendResponse } from "./app/Utils/sendResponse";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());
app.use(cookieParser());
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Welcome to the API",
  });
});
app.use(AppRoutes);
app.use(GlobalErrorHandler);
app.use((req: Request, res: Response, next: Function) => {
  sendResponse(res, {
    statusCode: 404,
    success: false,
    message: "Api Not Found",
  });
});
export default app;
