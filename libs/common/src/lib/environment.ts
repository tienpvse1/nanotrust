import { config } from 'dotenv';
config();

export const environment = {
  ENV: process.env.ENV || 'development',

  POSTGRES_USER: process.env.POSTGRES_USER || 'undefined',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'undefined',
  POSTGRES_DB: process.env.POSTGRES_DB || 'undefined',
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'undefined',
  POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,

  HASURA_URL: process.env.HASURA_URL || 'undefined',
  HASURA_GRAPHQL_DATABASE_URL:
    process.env.HASURA_GRAPHQL_DATABASE_URL || 'undefined',
  HASURA_GRAPHQL_ENABLE_CONSOLE:
    process.env.HASURA_GRAPHQL_ENABLE_CONSOLE || 'undefined',
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET || 'undefined',
};
