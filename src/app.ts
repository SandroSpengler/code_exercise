import { json } from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

import { connectToMongoDB } from "./services/mongodb";

import { appKonfigurationRouter } from "./route/appKonfiguration";
import { auftragRouter } from "./route/autrag";
import { configureCorsOptions } from "./services/cors";

const app = express();
const port = 3000;

app.use(cors(configureCorsOptions()));
app.use(json());

app.use("/api", auftragRouter);
app.use("/api", appKonfigurationRouter);

if (process.env.NODE_ENV !== "test") {
	connectToMongoDB(process.env.CONNECTION_STRING);
}
const server = app.listen(port, () => {
	if (process.env.NODE_ENV !== "test") {
		console.log(`server running on ${port}`);
	}
});

export default server;
