import { FilterQuery } from "mongoose";
import IAuftrag from "../interface/IAuftrag";
import AuftragSchema from "../schema/auftrag";

export const findAuftrag = async (filter: FilterQuery<IAuftrag>): Promise<IAuftrag[] | null> => {
	const foundAuftrag: IAuftrag[] = await AuftragSchema.find(filter).lean();

	return foundAuftrag;
};

export const createAuftrag = async (auftrag: IAuftrag): Promise<void> => {
	let newAuftrag = new AuftragSchema();

	newAuftrag.id = auftrag.id;
	newAuftrag.tenantId = auftrag.tenantId;
	newAuftrag.beschreibung = auftrag.beschreibung;
	newAuftrag.bezeichnung = auftrag.bezeichnung;
	newAuftrag.eigenschaften = auftrag.eigenschaften;

	await newAuftrag.validate();

	await newAuftrag.save();
};
