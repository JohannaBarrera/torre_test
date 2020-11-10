import quelize from "./index";
import { Sequelize, STRING, Model, NUMBER } from "sequelize";

/**
 * class that create the table User
 */
export class User extends Model { }
User.init({
  id: { type: NUMBER, primaryKey: true},
  emmail: { type: STRING },
  username: { type: STRING },
  password: { type: STRING },
  pasworconfirmation: { type: STRING },
}, { sequelize: quelize, modelName: "User" });