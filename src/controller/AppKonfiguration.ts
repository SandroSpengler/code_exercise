import express, { Request, Response } from "express";
import mongoose from "mongoose";
import {
	createAppKonfiguration,
	findAppKonfiguration,
} from "src/repository/AppKonfigurationRepository";

const router = express.Router();

router.get("/appkonfiguration", async (req: Request, res: Response) => {
	// const appkonfigurationInDB = await findAppKonfiguration({});
	const appkonfigurationInDB: any = null;
	if (appkonfigurationInDB === null) {
		return res.status(404).send();
	}

	if (appkonfigurationInDB.length === 0) {
		return res.status(404).json(appkonfigurationInDB);
	}

	return res.json(appkonfigurationInDB);
});

router.post("/appkonfiguration", async (req: Request, res: Response) => {
	if (Object.keys(req.body).length === 0) {
		return res.status(400).send();
	}

	try {
		// await createAppKonfiguration(req.body);
	} catch (error) {
		if (error instanceof mongoose.Error.ValidationError) {
			console.log(error);
			return res.status(400).send();
		}

		return res.status(500).send();
	}

	return res.status(201).send();
});

export { router as AppKonfigurationRouter };
