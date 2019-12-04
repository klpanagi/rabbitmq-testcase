FROM node:8

ENV RABBITMQ_HOST "rabbitmq"
ENV RABBITMQ_WEBSTOMP_PORT "15674"

WORKDIR /usr/src/app

COPY wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh

COPY package*.json ./

RUN npm install

COPY ./ .

CMD bash -c "/usr/wait-for-it.sh --timeout=0 ${RABBITMQ_HOST}:${RABBITMQ_WEBSTOMP_PORT} && npm start"
