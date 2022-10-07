import { config } from './config.js'; //MySql
//import { config } from './configSQLite.js'; //SQLite
import knex from 'knex';
export const knex = knex(config)