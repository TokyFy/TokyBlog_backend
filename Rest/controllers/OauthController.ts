import { RequestHandler } from "express";
import axios from "axios";

const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;
const GITHUB_URL = process.env.GITHUB_URL!;
const REDIRECT_URI = process.env.REDIRECT_URI!;

const OauthController: RequestHandler = (req, res) => {
  axios({
    method: "POST",
    url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    res.redirect(
      `${REDIRECT_URI}/${response.data.access_token}`
    );
  });
};

export { OauthController };
