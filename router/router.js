import express from 'express'

import { homeRoute } from "./routes/home.js";
import { verifyRoute } from "./routes/verify.js";
import { manageRoute } from "./routes/manage.js";
import { addTimeRoute } from "./routes/addTime.js";
import { reserveRoute } from "./routes/reserve.js";
import { timeListRoute } from "./routes/timelist.js";
import { verifyCodeRoute } from "./routes/verifyCode.js";
import { offlineRoute } from "./routes/offline.js";

export const router = express.Router()

router
  .get('/', homeRoute)
  .get('/verify', verifyRoute)
  .get('/manage', manageRoute)
  .post('/addTime', addTimeRoute)
  .post('/reserve', reserveRoute)
  .get('/timeList', timeListRoute)
  .get('/verifyCode', verifyCodeRoute)
  .get('/offline', offlineRoute)