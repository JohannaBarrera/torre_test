import quelize from "./index";
import { Sequelize, STRING, Model, NUMBER } from "sequelize";

/**
 * class that create the table person
 */
export class Job extends Model { }
Job.init({
  id: { type: NUMBER},
  strengths: { type: STRING},
  opportunity: { type: STRING},
  objective: { type: STRING},
  minAmount: { type: NUMBER},
  maxAmount: { type: NUMBER},
}, { sequelize: quelize, modelName: "Job" });




