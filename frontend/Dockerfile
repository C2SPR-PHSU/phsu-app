FROM node:16

RUN mkdir -p /var/www/
WORKDIR /var/www/

RUN rm -rf .next && rm -rf cache

COPY . /var/www/

RUN yarn

EXPOSE 3000
CMD ["yarn", "dev"]