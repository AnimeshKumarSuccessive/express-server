import { NextFunction, Request, Response } from 'express';

export default (request: Request, response: Response, next: NextFunction) => {
    next({status: 400, error: 'Not Found'});
};