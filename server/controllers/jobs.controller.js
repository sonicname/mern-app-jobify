import { BadRequestError } from "../errors/CustomAPIError.js";
import { StatusCodes } from "http-status-codes";
import Job from "../models/Job.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please Provide All Values");
  }

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  return res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });

  return res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

const updateJob = async (req, res) => {
  res.send("create job");
};

const deleteJob = async (req, res) => {
  res.send("create job");
};

const showStats = async (req, res) => {
  res.send("create job");
};

export { createJob, showStats, updateJob, deleteJob, getAllJobs };
