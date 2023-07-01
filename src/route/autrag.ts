import express, { Request, Response } from "express";
import IAuftrag from "../interface/auftrag";
import { createAuftrag, findAuftrag } from "../repository/auftrag";
import mongoose from "mongoose";

const router = express.Router();

router.get("/auftrag", async (req: Request, res: Response) => {
	const auftraegeInDB = await findAuftrag({});

	if (auftraegeInDB === null) {
		return res.status(404).send();
	}

	if (auftraegeInDB.length === 0) {
		return res.status(404).json(auftraegeInDB);
	}

	return res.json(auftraegeInDB);
});

router.post("/auftrag", async (req: Request, res: Response) => {
	if (Object.keys(req.body).length === 0) {
		return res.status(400).send();
	}

	try {
		await createAuftrag(req.body);
	} catch (error) {
		if (error instanceof mongoose.Error.ValidationError) {
			console.log(error);
			return res.status(400).send();
		}

		return res.status(500).send();
	}

	return res.status(201).send();
});

export { router as auftragRouter };
