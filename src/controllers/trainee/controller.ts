import { Request, Response, Next } from 'express';
import { trainee } from '../../libs/constants';

class Trainee {
    get(req: Request, res: Response, next: Next) {
        return res.status(200).send({ message: 'Fetched data Successfully', data: trainee });
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
        return res.status(200).send({ message: 'trainee added successfully', data: result });
    }

    put = (req: Request, res: Response, next: Next): any => {
        const { id: traineeId, ...rest  } = req.body;
        const data = trainee.find(({ id }) => id === traineeId);
        if (!data) {
            return next({ message: 'Bad request', error: 'Id is incorrect' });
        }
        const result = { ...data, ...rest };
        return res.status(200).send({ message: 'Trainee removed successfully', data: result });
    }

    delete = (req: Request, res: Response, next: Next): any => {
        const { params: { id: traineeId = '' } = {} } = req;
        const data = trainee.find(({ id }) => id === traineeId);
        if (!data) {
           return next({ message: 'Bad request', error: 'Id is incorrect' });
        }
        return res.status(200).send({ message: 'Trainee removed successfully', data });
    }
}

export default new Trainee();