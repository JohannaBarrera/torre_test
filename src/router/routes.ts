import { Controller } from "../controllers/Controller";

export default [
  {
    path: "/",
    method: "get",
    handler: Controller.index
  },
  {
    path: "login",
    method: "get",
    handler: Controller.loging
  },
  {
    path: "signup",
    method: "get",
    handler: Controller.signup
  },
  {
    path: "user",
    method: "post",
    handler: Controller.register
  },
];
