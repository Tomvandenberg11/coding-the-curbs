import express from 'express'

import {
  homeRoute
} from "./routes/home.js";
import {
  verifyRoute
} from "./routes/verify.js";
import {
  addTimeRoute
} from "./routes/addTime.js";
import {
  reservationRoute
} from "./routes/reservation.js";
import {
  timeListRoute
} from "./routes/timelist.js";
import {
  verifyCodeRoute
} from "./routes/verifyCode.js";
import {
  offlineRoute
} from "./routes/offline.js";
import {
  checkVerifyRoute
} from "./routes/checkverify.js";
import {
  noworlater
} from './routes/noworlater.js';
import {
  successfulRoute
} from './routes/successful.js';
import {
  deleteRoute
} from './routes/deleteRoute.js';
import {
  mapRoute
} from './routes/map.js';
import {
  errorRoute
} from './routes/error.js';

export const router = express.Router()

router
  .get('/', homeRoute)
  .get('/verify', verifyRoute)
  .get('/manage', checkVerifyRoute)
  .post('/addTime', addTimeRoute, )
  .post('/reservation', reservationRoute)
  .get('/timeList', timeListRoute)
  .post('/verifyCode', verifyCodeRoute)
  .post('/checkVerify', checkVerifyRoute)
  .get('/offline', offlineRoute)
  .get('/noworlater', noworlater)
  .get('/successful', successfulRoute)
  .post('/delete', deleteRoute)
  .get('/map', mapRoute)
  .get('/error', errorRoute)