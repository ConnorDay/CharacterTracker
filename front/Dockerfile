FROM node:alpine

WORKDIR /usr/src/app/front

COPY package*.json .
RUN npm ci

COPY . .

CMD ["npm", "start"]