# syntax=docker/dockerfile:1

# specify my baseImage and (optionally) the version and alias
FROM node:18.9.1 as base

# specify the path of the working directory
WORKDIR /app

# copy package.json for dependancy install
COPY package.json package.json
COPY package-lock.json package-lock.json

# specify test build
FROM base as prod

# clean dependancy install excluding dev dependancies
RUN npm ci --production

# copy files to image
COPY . .

#expose the port in the docker container
EXPOSE ${PORT}

# the command to start our app
CMD [ "node", "index.js" ]