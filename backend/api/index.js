import cors from "cors";
import express from "express";

const app = express();
app.use(cors()); //{ origin: "i actually dont know"}
app.use(express.json());

const BACKEND_URL = process.env.BACKEND_URL;

app.get(`${BACKEND_URL}`, async (req, res) => {});
