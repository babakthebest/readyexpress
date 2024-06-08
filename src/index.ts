import axios from "axios";
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  return res.send("ok");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
