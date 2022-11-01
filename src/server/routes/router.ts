import express, { Request, Response, NextFunction, Router } from "express";
import getInfo from "./middleware/getInfo";
import authController from "./middleware/auth";


const router: Router = express.Router();

//authentication routes handled
router.post('/register', authController.register, (req: Request, res: Response, next: NextFunction) => {
    res.status(200);
})

router.post('/login', authController.login, (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
})

//separate endpoint for OAuth? Vu-i think you can use the same endpoints.


router.get('/info', getInfo, (req:Request, res: Response ) => {
  res.status(200).json(res.locals.data)
})

export default router;