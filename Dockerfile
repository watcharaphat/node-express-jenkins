FROM node:8.9-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ..
RUN npm install -g babel-cli
COPY . .
EXPOSE 3000
RUN npm run build
CMD npm start