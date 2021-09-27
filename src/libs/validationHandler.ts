import { Request, Response, NextFunction } from 'express';

import { checkSchema, validationResult } from 'express-validator';

const validationHandler = (validator: any) => {
  return [
    checkSchema(validator), (req: Request, res: Response, next: NextFunction) => {
      console.log(req);
      const errors = validationResult(req);
      console.log('errors', errors);
      console.log('errors.isEmpty', errors.isEmpty());
      console.log('errors.array', errors.array());
      if (!errors.isEmpty()) {
        next({ message: 'Bad Request', status: 400, error: errors.array() });
      }
      next();
    }
  ];
};

export default validationHandler;