import mongoose, { Types } from "mongoose";
import IAuftrag from "../interface/auftrag";
import { EigenschaftSchema } from "./eigenschaft";

const AuftragSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
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

export default mongoose.model<IAuftrag>("AuftragSchema", AuftragSchema);
