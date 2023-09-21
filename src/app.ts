import { json } from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

import { AuftragRouter } from "./controller/Autrag";
import { configureCorsOptions } from "./services/Cors";
import { connectToMongoDB } from "./services/Mongodb";
import { AppKonfigurationRouter } from "./controller/AppKonfiguration";

const App = express();
const port = 3000;

App.use(cors(configureCorsOptions()));
App.use(json());

App.use("/api", AuftragRouter);
App.use("/api", AppKonfigurationRouter);

if (process.env.NODE_ENV !== "test") {
	connectToMongoDB(process.env.CONNECTION_STRING);
}
const server = App.listen(port, () => {
	if (process.env.NODE_ENV !== "test") {
		console.log(`server running on ${port}`);
	}
});

export default server;
