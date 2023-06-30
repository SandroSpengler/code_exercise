import IAuftrag from "../interface/auftrag";
import AuftragSchema from "../schema/auftrag";
import eigenschaft from "../schema/eigenschaft";

export const createAuftrag = async (auftrag: IAuftrag): Promise<void> => {
	let newAuftrag = new AuftragSchema();

	newAuftrag.id = auftrag.id;
	newAuftrag.beschreibung = auftrag.beschreibung;
	newAuftrag.bezeichnung = auftrag.bezeichnung;
	newAuftrag.eigenschaften = auftrag.eigenschaften;

	await newAuftrag.validate();

	await newAuftrag.save();
};
