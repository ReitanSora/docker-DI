FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN npm i -g serve

ARG VITE_LOCAL_BASE_URL
ARG VITE_TUNNEL_BASE_URL

ENV VITE_LOCAL_BASE_URL=$VITE_LOCAL_BASE_URL
ENV VITE_TUNNEL_BASE_URL=$VITE_TUNNEL_BASE_URL

COPY . .

RUN npm run build

EXPOSE 5173

CMD [ "serve", "-s", "dist", "-l", "5173"]