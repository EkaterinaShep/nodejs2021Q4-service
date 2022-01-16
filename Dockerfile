FROM node:16-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm i -g typeorm
COPY . .
CMD [ "npm", "run", "start:dev" ]
