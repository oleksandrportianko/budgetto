import pgPromise from 'pg-promise';

import { env } from './env.ts';

const pgp = pgPromise();

if (!env.databaseUrl) {
    throw Error("No database URL found!")
}

export const db = pgp(env.databaseUrl);