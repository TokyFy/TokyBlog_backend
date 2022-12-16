import { RequestHandler } from "express";
import axios from "axios";

const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;
const GITHUB_URL = process.env.GITHUB_URL!;

const OauthController: RequestHandler = (req, res) => {
  console.log(req.query)
  axios({
    method: "POST",
    url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    res.redirect(
      `http://localhost:5173/GuestBook/${response.data.access_token}`
    );
  });
};
231
export { OauthController };
