import { Request, Response, Next } from 'express';
import { users } from '../../libs/constants';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration'
import { request } from 'http';

class Users {
    get(req: Request, res: Response, next: Next) {
        
        return res.status(200).send({ message: 'Fetched data Successfully', data: users });
    }

    post(req: Request, res: Response, next: Next) {
        console.log(req.body);
        const { name, designation, location } = req.body;
        const result = {
            name,
            designation,
            location,
        };

        if (!name) {
            return next({ message: 'Bad request', error: 'Name is required' });
        }
        return res.status(200).send({ message: 'users added successfully', data: result });
    }

    put = (req: Request, res: Response, next: Next): any => {
        const { id: usersId, ...rest  } = req.body;
        const data = users.find(({ id }) => id === usersId);
        if (!data) {
            return next({ message: 'Bad request', error: 'Id is incorrect' });
        }
        const result = { ...data, ...rest };
        return res.status(200).send({ message: 'users removed successfully', data: result });
    }

    delete = (req: Request, res: Response, next: Next): any => {
        const { params: { id: usersId = '' } = {} } = req;
        const data = users.find(({ id }) => id === usersId);
        if (!data) {
           return next({ message: 'Bad request', error: 'Id is incorrect' });
        }
        return res.status(200).send({ message: 'user removed successfully', data });
    }

    createToken(req:Request, res:Response, next:Next) {
        
            const token = jwt.sign(req.body, config.secret, {expiresIn:'10h'});
            console.log(token);
            return res.status(200).send({message: 'Token Succesfully Created', data: { token }, status: 'success'});  
    }
    
}

export default new Users();