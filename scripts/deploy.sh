#!/usr/bin/env sh

npm run build

if ! [ -x "$(command -v pm2)" ]; then
  npm install -g pm2
fi

pm2 start build/server.js