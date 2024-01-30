import mySql from 'mysql2';
import { KEYS } from './keys.js';
//test
const pool = mySql.createPool({
    host: KEYS.DB_HOST,
    user: KEYS.DB_USER,
    database: KEYS.DB_NAME,
    password: KEYS.DB_PASSWORD,
});

const promisePool = pool.promise(); 
export default promisePool;