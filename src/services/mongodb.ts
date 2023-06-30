import mongoose from "mongoose";

const connectToMongoDB = async (connectionString: string | undefined): Promise<void> => {
	if (connectionString === undefined) {
		throw new Error("No connection was provided");
	}

	try {
		await mongoose.connect(connectionString);
	} catch (error) {
		console.log(error);
	}
};

export { connectToMongoDB };
