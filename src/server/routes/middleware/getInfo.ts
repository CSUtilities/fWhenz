import { Request, Response, NextFunction} from 'express';
import db from '../utils'

const getInfo = async (req: Request, res: Response, next: NextFunction) => {
  const info: string = 'SELECT * FROM "public"."people"';
  try {
    const getAll:any = await db.query(info)
    console.log('returned getAll info', getAll);
    res.locals.data = getAll;
    return next()
  }
  catch(err) {
    console.log('error in getInfo middleware')
  }
};

export default getInfo;