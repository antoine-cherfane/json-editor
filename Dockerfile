FROM httpd:alpine3.19

RUN rm -rf /usr/local/apache2/htdocs/*
COPY ./dist /usr/local/apache2/htdocs/