import { Sequelize } from "sequelize";

import config from "../config/db";

const { database, username, password, ...dbConfig } = config[
  process.env.NODE_ENV || "development"
];
const sequelize = new Sequelize(database, username, password, dbConfig);

export default sequelize;
