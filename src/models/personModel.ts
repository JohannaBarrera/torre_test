import quelize from "./index";
import { Sequelize, STRING, Model, NUMBER } from "sequelize";

/**
 * class that create the table person
 */
export class Apps extends Model { }
Apps.init({
  id: { type: NUMBER, primaryKey: true },
  name: { type: STRING },
  professionalHeadline: { type: STRING },
  picture: { type: STRING },
  location: { type: STRING },
  summaryOfBio: { type: STRING },
  strengths: { type: STRING },
  education: { type: STRING },
}, { sequelize: quelize, modelName: "person" });



