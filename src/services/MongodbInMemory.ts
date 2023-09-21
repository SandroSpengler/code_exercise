import mongoose, { ConnectOptions } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongod: MongoMemoryServer;

export const connectToMemoryDB = async (): Promise<void> => {
	mongod = await MongoMemoryServer.create();
	const uri = mongod.getUri();

	await mongoose.connect(uri);
};

export const closeMemoryDB = async (): Promise<void> => {
	await mongoose.connection.dropDatabase();
	await mongoose.connection.close();

	await mongod.stop();
};

export const clearMemoryDB = async (): Promise<void> => {
	const collections = mongoose.connection.collections;

	for (const key in collections) {
		const collection = collections[key];
		await collection.deleteMany({});
	}
};
