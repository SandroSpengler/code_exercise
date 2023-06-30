import express from "express";
import { json } from "body-parser";
import { auftragRouter } from "./route/autrag";
import { connectToMongoDB } from "./services/mongodb";
import "dotenv/config";

const app = express();
const port = 5000;

app.use(json());

app.use("/api", auftragRouter);

connectToMongoDB(process.env.CONNECTION_STRING);

app.listen(port, () => {
	console.log(`server running on ${port}`);
});
