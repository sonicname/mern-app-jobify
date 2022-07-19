import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleWare = (error, req, res, next) => {
  console.log(error);
  const defaultError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || "Something went wrong, try again later",
  };
  if (error.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = Object.values(error.errors)
      .map((item) => {
        return item.message;
      })
      .join(", ");
  }

  if (error.code && error.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = `${Object.keys(
      error.keyValue
    )} field has to be unique`;
  }

  res.status(defaultError.statusCode).json({
    message: defaultError.message,
  });
};

export default errorHandlerMiddleWare;
