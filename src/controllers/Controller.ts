import { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel";
import { BDcontroller } from "./BDcontroller";
import { userInfo } from "os";
import { apiTorre } from "../services/apiTorre/apiTorre";
import { info } from "console";


export class Controller {

  public static async index(req: Request, res: Response, next: NextFunction) {
    res.render("index");
  }

  public static async search(req: Request, res: Response, next: NextFunction) {
    res.render("searchPerson");
  }

  public static async searchJob(req: Request, res: Response, next: NextFunction) {
    const datos = await apiTorre.getOferJob("ldE5DQd7");

    res.locals = { datos };

    res.render("searchJob");
  }

  public static async Job(req: Request, res: Response, next: NextFunction) {
    const datos = await apiTorre.getOferJob("ldE5DQd7");

    res.locals = { datos };

    res.render("profileJob");
  }


  public static async loging(req: Request, res: Response, next: NextFunction) {
    res.render("login");
  }

  public static async signup(req: Request, res: Response, next: NextFunction) {
    res.render("signup");
  }

  public static async register(req: Request, res: Response, next: NextFunction) {
    const userInfo = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      pasworconfirmation: req.body.password_confirmation
    };

    BDcontroller.saveUser(userInfo);
    res.redirect("login");
  }

  public static async profileView(req: Request, res: Response, next: NextFunction) {

    const user = req.body.username;
    const userBD = await BDcontroller.findUser(user);
    const infoUser = await apiTorre.getPerson(user);

    if (user == userBD) {
      const infoUser = await apiTorre.getPerson(user);
      res.locals = { infoUser };
      res.render("profileView");
    }
    else { res.redirect("login"); }

  }

  public static async jobView(req: Request, res: Response, next: NextFunction) {

    const job = req.body.job;
    const infoJob = await apiTorre.getPerson(job);

    res.locals = { infoJob };
    res.render("profileJob");
  }
}
