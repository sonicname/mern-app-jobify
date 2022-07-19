import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/CustomAPIError.js";

const register = async (req, res) => {
  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    throw new BadRequestError("Please provide all field!");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create(req.body);
  return res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
