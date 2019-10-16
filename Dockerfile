
FROM node:9.6.1

RUN mkdir -p /application

COPY . /application

WORKDIR /application

RUN npm install --silent
RUN npm rebuild node-sass
RUN npm install react-scripts@1.1.1 -g --silent
RUN npm install caniuse-lite browserslist

CMD ["npm", "start"]

EXPOSE 5000


# FROM node:9.4.0

# # The base node image sets a very verbose log level.
# ENV NPM_CONFIG_LOGLEVEL warn

# # Copy all local files into the image.
# RUN mkdir -p /application

# COPY . /application

# WORKDIR /application

# # Install `serve` to run the application.
# RUN npm install -g serve

# RUN npm install

# # Build for production.
# RUN npm run build --production

# # Set the command to start the node server.
# CMD serve -s build

# # Tell Docker about the port we'll run on.
# EXPOSE 5000