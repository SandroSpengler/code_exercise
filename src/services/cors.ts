import { CorsOptions } from "cors";

export const configureCorsOptions = (): CorsOptions => {
	const options: CorsOptions = {
		allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
		credentials: true,
		methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
		origin: "*",
		preflightContinue: false,
	};

	return options;
};
