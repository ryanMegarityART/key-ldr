import "express-async-errors";

import { PrismaClient } from "@prisma/client";
import express, { json } from "express";
import helmet from "helmet";

import routes from "./routes";

const app = express();
app.use(json());
app.use(helmet());

const prisma = new PrismaClient();

app.use("/", routes);

app.get("/prisma", async (_, res) => {
  await prisma.user.create({
    data: {
      email: "random@example.com",
    },
  });

  res.json({
    msg: "Add a new unique user without duplicate",
  });
});

app.use((_, res, _2) => {
  res.status(404).json({ error: "NOT FOUND" });
});

export { app };
