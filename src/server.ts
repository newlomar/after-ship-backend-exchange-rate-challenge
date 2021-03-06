import express from "express";

import { Router, Request, Response } from "express";

const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req, res) => {
  res.json({ message: "Hello world, with typescript!" });
});

app.use(route);

app.listen(3333, () => {
  console.log("server is running on port 3333");
});
