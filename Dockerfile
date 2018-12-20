FROM mhart/alpine-node:10
RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json /app/

RUN apk update && apk upgrade && \
    apk add --no-cache bash openssh

RUN npm ci

# Explicitly copy the things we need
COPY ./config config
COPY ./src src
COPY ./index.js index.js

CMD [ "npm", "run", "serve" ]
