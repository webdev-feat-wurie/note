FROM node:10
WORKDIR /code
COPY package*.json /code/
RUN yarn
COPY . /code/
CMD ["yarn", "start"]