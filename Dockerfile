FROM node:13.7.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY  . ./

RUN npm install
RUN npm install -g serve
RUN npm run build

CMD ["serve", "-s", "build"]
