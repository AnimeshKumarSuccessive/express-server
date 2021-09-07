export default (req, res, next) => {
    const error = {
      error: 'Not Found',
      status: 404,
      message: "Not Found",
    };
    next(error);
  };