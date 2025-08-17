import Knex, { type Knex as KnexType } from 'knex';
import { config } from 'knexfile';

function createKnexInstance(
  config: KnexType.Config<any>,
): KnexType<any, unknown[]> {
    return Knex(config);
}

export const knex = createKnexInstance(config);
