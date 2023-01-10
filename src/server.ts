import express from "express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3777);
