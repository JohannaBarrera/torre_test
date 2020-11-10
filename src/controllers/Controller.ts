import { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel";
import { BDcontroller } from "./BDcontroller";
import { userInfo } from "os";


export class Controller {

  public static async index(req: Request, res: Response, next: NextFunction) {
    res.render("index");
  }

  public static async loging(req: Request, res: Response, next: NextFunction) {
    res.render("login");
  }

  public static async signup(req: Request, res: Response, next: NextFunction) {
    res.render("signup");
  }
  public static async register(req: Request, res: Response, next: NextFunction) {
    console.log("\n\n Ver los datos \n\n");
    console.log(req.body);


    let userInfo = {    
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      pasworconfirmation: req.body.password_confirmation
    };
    
    BDcontroller.saveUser(userInfo);
    res.redirect("login");
  }


}
