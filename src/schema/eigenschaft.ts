import mongoose, { Types } from "mongoose";
import IEigenschaft from "../interface/IEigenschaft";

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
		required: true,
		enum: {
			values: ["Kunde", "Käufer", "Konsument"],
		},
	},
	// datentyp: {
	// 	type: Object,
	// 	content: Object,
	// },
});

export default mongoose.model<IEigenschaft>("EigenschaftSchema", EigenschaftSchema);
