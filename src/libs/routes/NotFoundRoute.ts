import { NextFunction, Request, Response } from 'express';

export default (request: Request, response: Response, next: NextFunction) => {
    next({status: 404, error: 'Not Found'});
};