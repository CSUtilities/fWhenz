import 'dotenv';
import 'dotenv/config';

//const connectionString = process.env.CONNECTION_STRING;

const connectionString = "postgres://emqhofqy:YMn4QVa9a4JSiKE_INo2pnTj13NxmsCe@heffalump.db.elephantsql.com/emqhofqy"

import { Pool } from 'pg';


// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: connectionString
});


export default {
  query: (text: any, params?: any, callback?: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};