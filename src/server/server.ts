import express from 'express';
import path from 'path';

const app = express();

// interface ServerError {
//   log: string
//   status: number
//   message: { err: string }
// }

// app.use('/', (err: ServerError, req: Request, res: Response, next: NextFunction) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 400,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// })

app.listen(3333, () => console.log('server is listening on port 3333'));