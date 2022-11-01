const connectionString = process.env.CONNECTION_STRING;


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