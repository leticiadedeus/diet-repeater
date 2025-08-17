import { z } from 'zod';

export enum AppEnvironments {
  offline = 'offline',
  dev = 'dev',
}

export type AppEnvironment =
  (typeof AppEnvironments)[keyof typeof AppEnvironments];

const envSchema = z.object({
  nodeEnv: z.enum(['development']).default('development'),
  databaseUrl: z.string().default(''),
});

export const env = envSchema.parse({
  nodeEnv: process.env.NODE_ENV,
  databaseUrl: process.env.DATABASE_URL,
});
