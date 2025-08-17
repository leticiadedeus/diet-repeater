import "dotenv/config";
import type { Knex } from "knex";
import { env } from "@/main/config/env";

export const config: Knex.Config = {
	client: "postgresql",
	connection: {
		connectionString: env.databaseUrl
    },
	pool: {
		min: 1,
		max: 1,
	},
	migrations: {
		tableName: "knex_migrations",
		directory: ["./database/migrations"],
	},
};

export default config;