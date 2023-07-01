import app from "../src/app";

import supertest from "supertest";

import { clearMemoryDB, closeMemoryDB, connectToMemoryDB } from "../src/services/mongodbInMemory";
import IAuftrag from "../src/interface/auftrag";
import IEigenschaft from "../src/interface/eigenschaft";

const request = supertest(app);
describe("Test request with mongoose", () => {
	beforeAll(async () => {
		await connectToMemoryDB();
	});

	afterEach(async () => {
		// await clearMemoryDB;
		app.close();
	});

	afterAll(async () => {
		await clearMemoryDB();
		await closeMemoryDB();
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

	it("GET - /auftrag", async () => {
		const res = await request.get("/api/auftrag");
		const body: IAuftrag[] = res.body;

		expect(res.statusCode).toBe(200);
		expect(body[0].id).toEqual(10);
		expect(body[0].eigenschaften[0].datentyp).toEqual("Konsument");
	});
});
