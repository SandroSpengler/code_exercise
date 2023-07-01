import mongoose from "mongoose";
import IAppKonfiguration from "../interface/appKonfiguration";
import { EigenschaftSchema } from "./eigenschaft";

const AppKonfiguration = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	tenantId: {
		type: Number,
	},
	bezeichnung: {
		type: String,
		required: true,
	},
	beschreibung: {
		type: String,
		required: true,
	},
	eigenschaften: {
		type: [EigenschaftSchema],
		required: true,
	},
});

export default mongoose.model<IAppKonfiguration>("AppKonfigurationSchema", AppKonfiguration);
