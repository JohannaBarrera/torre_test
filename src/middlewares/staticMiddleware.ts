
import express, { Application } from "express";
import { join } from "path";

export const handleStatic = (app: Application, dirname: string = "") => {

  console.log(dirname);
  app.use(express.static(join(dirname, "/public")));
};

export default [handleStatic];
