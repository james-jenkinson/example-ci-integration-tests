FROM node:13.5.0

ADD package.json .
ADD tsconfig.json .
ADD config ./config

RUN npm install
RUN npm install -g nodemon@2.0.2

ENTRYPOINT [ "nodemon" ]
CMD [ "--watch",  "./src", "--watch", "./config", "--ext", ".ts", "--exec", "./node_modules/.bin/tsc && node ./build/index.js" ]
