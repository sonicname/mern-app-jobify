import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleWare = (error, req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: error,
  });
};

export default errorHandlerMiddleWare;
