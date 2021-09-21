import { Request, Response, Next } from 'express';
import { request } from 'http';

class Trainee {
    get(req: Request, res: Response, next: Next) {
        const trainee = [
            {
                name: 'Deepak',
                designation: 'Software Developer',
                location: 'Pune',
            },
            {
                name: 'Darshan',
                designation: 'Tester',
                location: 'Mumbai',
            },
            {
                name: 'Shreya',
                designation: 'frontend Developer',
                location: 'Noida',
            },
            {
                name: 'Siddhesh',
                designation: 'Backend Developer',
                location: 'Chennai',
            },
        ];
        return res.status(200).send({ message: 'Fetched data Successfully', data: trainee });
    }
    post(req: Request, res: Response, next: Next) {
        console.log(req.body);
        const { name, designation, location } = req.body.params;
        if (!name) {
            return res.status(404).send({ message: 'required trainee details', error: 'error msg' });
        }
        return res.status(200).send({ message: 'trainee added sucessfully' });
    }
    put = (req: Request, res: Response): any => {
        const trainee = this.rawTraineeData();

        const requestName = req.params.name;

        const data = trainee.find((post, index) => {
          if (post.name === requestName) return true;
        });
        if(data){
        data.designation = 'Associate Engineer';
        return res.status(200).send({ message: 'Updated trainee successfully', data: trainee });
        }
        return res.send({message: `Trainee ${requestName} not found.`})
    }
    rawTraineeData = () => {
        const trainee = [
            {
                name: 'Darshan',
                designation: 'developer',
                location: 'Pune',
            },
            {
                name: 'Roshan',
                designation: 'Tester',
                location: 'Mumbai',
            },
            {
                name: 'Ashish',
                designation: 'frontend Developer',
                location: 'Noida',
            },
            {
                name: 'Darshani',
                designation: 'Designer',
                location: 'Chennai',
            },
        ];
        return trainee;
    }
    delete = (req: Request, res: Response) => {
        const trainee = this.rawTraineeData();
        const requestName = req.params.name;
        const data = trainee.find((post, index) => {
            if (post.name === requestName) return true;
          });
          if (data === undefined){
            return res.send({message: `Trainee ${requestName} not found.`})
          }
        const deletedData = this.rawTraineeData().filter((post, index) => {
            if (post.name !== requestName) return true;
        });        
            return res.status(200).send({ message: 'Trainee removed successfully', data: deletedData });
                        
    }
}

export default new Trainee();