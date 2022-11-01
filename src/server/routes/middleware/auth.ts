import router from '../router';
import {Request, Response, NextFunction} from 'express';

const authController = {};
//controller functions

authController.register = async (req: Request, res: Response, next: NextFunction) => {
    try {

    }catch (err) {
        return next({
            log: 'Middleware error in authController.register',
            message: { err: 'An error occurred while registering'},
        });
    }
    return next();
}

authController.login;


export default authController;