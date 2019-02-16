
FROM node:9.6.1

RUN mkdir -p /application

COPY . /application

WORKDIR /application

RUN npm install --silent
RUN npm rebuild node-sass
RUN npm install react-scripts@1.1.1 -g --silent

CMD ["npm", "start"]

EXPOSE 3000