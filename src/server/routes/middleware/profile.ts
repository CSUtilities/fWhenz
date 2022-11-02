import { Request, Response, NextFunction} from 'express';
import db from '../utils'

const profile = async (req: Request, res: Response, next: NextFunction) => {
  const uid = req.body.uid;
  // console.log('this is uid', uid);
  const queryString: string = `SELECT * FROM people WHERE uid = ${uid}`;
  try {
    const check:any = await db.query(queryString);
    // console.log('returned check profile', check);
    if (check.rowCount >= 1) {
      res.locals.data = check.rows[0];
    } else {
      const { firstname, lastname, city, state, company } = req.body;
      console.log(firstname, lastname, city, state, company, uid)
      const insertString: string = 'INSERT INTO people (firstname, lastname, city, state, company, uid) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      const values = [firstname, lastname, city, state, company, uid];
      const insert: any = await db.query(insertString, values);
      console.log('this is insert from profile', insert.rows[0]);
      res.locals.data = insert.rows[0];
    }
    return next();
  }
  catch(err) {
    console.log('error from profile')
  }
};

export default profile;