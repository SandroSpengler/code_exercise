import express, { Application, urlencoded } from "express";
import { json } from "body-parser";
import { auftragRouter } from "./route/autrag";
import { connectToMongoDB } from "./services/mongodb";
import "dotenv/config";
import { appKonfigurationRouter } from "./route/appKonfiguration";

const app = express();
const port = 3000;

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
