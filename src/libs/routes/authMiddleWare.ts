import * as jwt from 'jsonwebtoken';
import  config  from '../../config/configuration';
import hasPermission from '../../libs/hasPermission';
import UserRepository from '../../repositories/user/UserRepository';


export const userRepository: UserRepository = new UserRepository();
export default (module, permissionType) => async(req, res, next) => {
    debugger
    const token = req.header('Authorization');
    console.log('token -', token);
    if (!token) {
        next({ error : 'Unauthorized', message : 'Token not found', status : 403});
    }
    const { secret } = config;
    console.log('secret_key-', secret);

    let user;
    try {
        debugger
        user = jwt.verify(token, secret);
    }
    catch (err) {
        next({ error : 'Unauthorized', message : 'User not Authorized', status : 403});
    }
    console.log('User is', user);

    if (!user) {
        next({ error : 'Unauthorized', message : 'User not Authorized', status : 403});
    }
    console.log('haspermission', hasPermission( module, user.role, permissionType));
    
    if (!hasPermission( module, user.role, permissionType )) {
        next({ error : 'Unauthorized', message : 'Permisssion Denied', status : 403});
    }
    req.user = user;
    next();
};