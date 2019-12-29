FROM node:13.5.0

ADD package.json .
ADD tsconfig.json .
ADD src ./src
ADD config ./config

RUN npm install

RUN ./node_modules/.bin/tsc --watch

ENTRYPOINT ["node"]
