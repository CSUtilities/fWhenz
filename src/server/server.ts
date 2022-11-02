import express, { Request, Response, Router, Express, NextFunction } from 'express';
import path from 'path';
import morgan from 'morgan';
import routes from './routes/router'


// /* plug ins we might need later, cookieParser, cors */

const app: Express = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// //morgan package should give detail on every incoming http request
app.use(morgan('tiny'));

interface ServerError {
  log: string
  status: number
  message: { err: string }
}

// //serving build in production mode
app.use(express.static(path.resolve(__dirname, '../../dist')));

//serve index.html
app.get('/', (req : Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../client/', 'index.html'));
})

// //primary router
app.use('/api', routes);

// //404 handler
// app.use((req, res) => {
//     console.log(`handler not found for request ${req.method} ${req.url}`);
//     res.status(404).send('Page not found');
// });

// //global error handler
// app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 400,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// })

//start server
app.listen(3333, () => console.log('server is listening on port 3333'));