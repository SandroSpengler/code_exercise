import mongoose from "mongoose";

const connectToMongoDB = async (connectionString: string | undefined): Promise<void> => {
	try {
		if (connectionString === undefined) {
			throw new Error("No connection was provided");
		}

		await mongoose.connect(connectionString);

		console.log("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
};

export { connectToMongoDB };
