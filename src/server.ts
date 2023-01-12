import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container";
import { AppError } from "./errors/Apperror";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3777);
