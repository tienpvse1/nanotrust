import { appConstance, environment } from '@nanotrust/common';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
const app = express();

app.get('/api', (_req, res) => {
  res.send({ message: 'Welcome to sample!' });
});

app.get('/env', (_req, res) => {
  res.status(StatusCodes.OK).json(environment);
});

const server = app.listen(appConstance.PORT, () => {
  console.log(
    `Listening at http://${appConstance.HOST}:${appConstance.PORT}/api`
  );
});
server.on('error', console.error);
