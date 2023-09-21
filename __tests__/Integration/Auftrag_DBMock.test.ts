import app from "src/app";
import supertest from "supertest";
import IEigenschaft from "src/interface/IEigenschaft";
import IAuftrag from "src/interface/IAuftrag";

import * as DBService from "../../src/services/Mongodb";
import * as AuftragRepo from "../../src/repository/AuftragRespository";

describe("Auftrag - DB Mock", () => {
	const request = supertest(app);
	jest.spyOn(DBService, "connectToMongoDB").mockResolvedValue();

	beforeAll(async () => {
		jest.spyOn(AuftragRepo, "createAuftrag").mockResolvedValue();
	});

	afterAll(async () => {
		jest.resetAllMocks();
		app.close();
	});

	it("POST - /auftrag", async () => {
		const eigenschaft: IEigenschaft = {
			id: 1,
			beschreibung: "Test EigenschaftBeschreibung",
			datentyp: "Konsument",
		};

		const auftrag: IAuftrag = {
			id: 10,
			bezeichnung: "Test Bezeichnung",
			beschreibung: "Test Beschreibung",
			eigenschaften: [eigenschaft],
		};

		const res = await request.post("/api/auftrag").send(auftrag);

		expect(res.statusCode).toBe(201);
		expect(res.body).toEqual({});
	});
});
