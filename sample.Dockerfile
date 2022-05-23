FROM node:18-alpine as development
WORKDIR /nanotrust/


FROM node:18-alpine as production
WORKDIR /nanotrust/
COPY ./dist/apps/sample/ /nanotrust/dist/
CMD [ "node", "dist/main" ]
