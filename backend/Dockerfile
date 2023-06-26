FROM strapi/base

WORKDIR /app

COPY ./package*.json .

RUN npm install -g npm@9.7.2

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 1337
CMD ["npm", "run", "develop"]