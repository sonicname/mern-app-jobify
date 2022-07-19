import express from "express";
const router = express.Router();
import {
  createJob,
  deleteJob,
  getAllJobs,
  showStats,
  updateJob,
} from "../controllers/jobs.controller.js";

router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").post(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
