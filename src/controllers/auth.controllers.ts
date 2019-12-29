import { RequestHandler } from "express";

const login: RequestHandler = (req) => {
  console.log(req);
}

export default {
  login,
};
