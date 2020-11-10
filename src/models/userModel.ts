import quelize from "./index";
import { Sequelize, STRING, Model, NUMBER, INTEGER } from "sequelize";

/**
 * class that create the table User
 */
export class User extends Model { }
User.init({
  email: { type: STRING },
  username: { type: STRING, primaryKey: true },
  password: { type: STRING },
  pasworconfirmation: { type: STRING },
}, { sequelize: quelize, modelName: "User" });