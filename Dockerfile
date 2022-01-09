FROM node:16-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm prune --production

FROM node:16-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
RUN npm i -g nodemon && npm i -g typescript && npm i -g concurrently
COPY --from=builder /usr/src/app/logs ./logs
COPY --from=builder /usr/src/app/db ./db
COPY --from=builder /usr/src/app/tsconfig.json ./tsconfig.json
CMD [ "npm", "run", "start:dev" ]
