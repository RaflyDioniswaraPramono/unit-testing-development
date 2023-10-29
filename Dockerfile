FROM node:20.9.0-alpine3.17

WORKDIR /homework/app

COPY package*./json ./

COPY . .

EXPOSE 8090

CMD [ "node", "app.js" ]


