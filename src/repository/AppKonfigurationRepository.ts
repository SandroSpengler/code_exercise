import { FilterQuery } from "mongoose";

import AppKonfiguration from "../schema/appKonfiguration";
import IAppKonfiguration from "../interface/IAppKonfiguration";

export const findAppKonfiguration = async (
	filter: FilterQuery<IAppKonfiguration>,
): Promise<IAppKonfiguration[] | null> => {
	const foundAuftrag: IAppKonfiguration[] = await AppKonfiguration.find(filter).lean();

	return foundAuftrag;
};

export const createAppKonfiguration = async (auftrag: IAppKonfiguration): Promise<void> => {
	let newAuftrag = new AppKonfiguration();

	newAuftrag.id = auftrag.id;
	newAuftrag.tenantId = auftrag.tenantId;
	newAuftrag.beschreibung = auftrag.beschreibung;
	newAuftrag.bezeichnung = auftrag.bezeichnung;
	newAuftrag.eigenschaften = auftrag.eigenschaften;

	await newAuftrag.validate();

	await newAuftrag.save();
};
