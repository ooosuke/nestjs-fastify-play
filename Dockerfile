FROM node:18.16.0-alpine3.17 as builder

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:18.16.0-alpine3.17

WORKDIR /usr/app

COPY --from=builder --chown=nobody:nogroup /usr/app/node_modules ./node_modules
COPY --from=builder --chown=nobody:nogroup /usr/app/dist/ .

USER nobody

EXPOSE 3000

CMD [ "node", "main.js" ]