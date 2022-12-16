const express = require('express');
import {OauthController} from "../controllers/OauthController";

const router = express.Router();

router.route('/').get(OauthController);

export default router;