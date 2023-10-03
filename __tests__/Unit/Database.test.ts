import mongoose from "mongoose";
import * as Database from "../../src/services/Mongodb";

describe("Database", () => {
	let dbSpy: jest.SpyInstance<Promise<void>, [connectionString: string], any>;
	let consoleErrorSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]], any>;
	let consoleLogSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]], any>;
	let mongooseSpy: jest.SpyInstance<
		Promise<typeof mongoose>,
		[uri: string, options?: mongoose.ConnectOptions],
		any
	>;
	beforeEach(() => {});

	afterEach(() => {
		jest.clearAllMocks();
		jest.restoreAllMocks();
	});

	it("should not connect to DB | undefined connection string", async () => {
		mongooseSpy = jest.spyOn(mongoose, "connect");
		consoleErrorSpy = jest.spyOn(console, "error").mockReturnValue();

		await Database.connectToMongoDB(undefined);

		expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
		expect(mongooseSpy).not.toHaveBeenCalled();
	});

	it("should not connect to DB | invalid connection string", async () => {
		mongooseSpy = jest.spyOn(mongoose, "connect");
		consoleErrorSpy = jest.spyOn(console, "error").mockReturnValue();

		await Database.connectToMongoDB("mongodb://");

		expect(mongooseSpy).toHaveBeenCalledTimes(1);
		expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
	});

	it("should connect to DB | mocked mongoose connection method", async () => {
		mongooseSpy = jest.spyOn(mongoose, "connect").mockResolvedValue("" as any);
		consoleLogSpy = jest.spyOn(console, "log").mockReturnValue();

		await Database.connectToMongoDB("mongodb://");

		expect(mongooseSpy).toHaveBeenCalledTimes(1);
		expect(consoleLogSpy).toHaveBeenCalledTimes(1);
	});
});
