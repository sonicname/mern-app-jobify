const errorHandlerMiddleWare = (error, req, res, next) => {
  console.log(error);

  res.status(500).json({
    message: "there was an error",
  });
};

export default errorHandlerMiddleWare;
