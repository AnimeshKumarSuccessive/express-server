const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
      console.log('Error is sent to client');
      return next(err);
    }
  
    const { message, status, error } = err;
    const Error = {
      error: error || 'undefined',
      message: message || 'Error',
      status: status || 500,
      timestamp: new Date(),
    };
  
    res.status(Error.status).json(Error);
  };
  
  export default errorHandler;