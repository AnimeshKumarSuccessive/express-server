import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            console.log('res',res);

            if (res === 0) {
                console.log('Data seeding in progress');
                userRepository.create(
                    {
                     name : 'Head-Trainer' , 
                     role: 'head-trainer', 
                     email: 'headtrainer@successive.tech', 
                     password: 'Training@123'
                    }
                );
            }
        }).catch(err => (console.log(err)));
};