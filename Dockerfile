# Get the base image of node version 16
FROM node:16
# Get the latest version of playwright
FROM mcr.microsoft.com/playwright:focal
 
# Setting the work directory for the application
WORKDIR /app
 
# Set environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH
# COPY the needed files to the app folder in docker image
COPY package*.json /app/
COPY tests/ /app/tests/
COPY tsconfig.json /app/
COPY config.toml /app/
# Needed libraries in order to run playwright
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev
# Install the dependencies in node environment
RUN npm install