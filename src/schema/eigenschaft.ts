import mongoose, { Types } from "mongoose";
import IEigenschaft from "../interface/eigenschaft";

export const EigenschaftSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	beschreibung: {
		type: String,
		required: true,
	},
	datentyp: {
		type: String,
		content: Object,
	},
});

export default mongoose.model<IEigenschaft>("EigenschaftSchema", EigenschaftSchema);
