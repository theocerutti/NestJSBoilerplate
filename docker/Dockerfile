FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY test ./
COPY nest-cli.json ./
COPY ts*.json ./

CMD ["npm", "run", "start:dev"]
