FROM node:14.15.1

ADD package.json .
ADD tsconfig.json .
ADD src ./src
ADD config ./config

RUN npm install

RUN ./node_modules/.bin/tsc

ENTRYPOINT ["node"]
