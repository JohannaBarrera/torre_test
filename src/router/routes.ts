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
  {
    path: "profile",
    method: "post",
    handler: Controller.profileView
  },

  {
    path: "search",
    method: "get",
    handler: Controller.search
  },

  {
    path: "searchJob",
    method: "get",
    handler: Controller.searchJob
  },

  {
    path: "job",
    method: "get",
    handler: Controller.Job
  },



 

];
