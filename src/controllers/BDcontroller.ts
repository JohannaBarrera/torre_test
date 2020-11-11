import quelize from "../models/index";
import { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel";


export class BDcontroller {

  public static async saveUser(dataUser: any) {

    console.log(dataUser);
    try {
      await quelize.sync();
      await User.create(dataUser);
    } catch (err) {
      console.error(err);
    }
  }

  public static async findUser(userName: any) {

    try {
      const dataUser = await User.findOne({ where: { username: userName } });
      return dataUser?.get().username;
    } catch (err) {
      console.error(err);
    }
  }
}