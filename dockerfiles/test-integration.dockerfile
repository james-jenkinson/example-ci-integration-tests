FROM node:14.15.1

ADD package.json .
ADD .mocharc.json .
ADD tsconfig.json .
ADD test ./test
ADD helpers ./helpers
ADD config ./config

RUN npm install

ENTRYPOINT [ "npm" ]
CMD [ "test" ]
