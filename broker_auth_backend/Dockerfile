FROM python:3.7-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV SERVER_PORT 8083

WORKDIR /usr/src/app

RUN pip install django


COPY . /usr/src/app

EXPOSE 8083

ENTRYPOINT ["/usr/src/app/start.sh"]
