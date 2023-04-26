FROM alpine:latest

WORKDIR /var/www/html/

# Essentials
RUN echo "UTC" > /etc/timezone
RUN apk add --no-cache zip unzip curl sqlite nginx supervisor

# Installing bash
RUN apk add bash
RUN sed -i 's/bin\/ash/bin\/bash/g' /etc/passwd

# Install packages not yet updated for the current alpine version TODO remove when no longer needed
RUN echo 'https://dl-cdn.alpinelinux.org/alpine/v3.14/community' >> /etc/apk/repositories
RUN echo 'https://dl-cdn.alpinelinux.org/alpine/v3.14/main' >> /etc/apk/repositories

# Updating
RUN apk update && apk upgrade

# Installing PHP
RUN apk --no-cache add \
    php81 \
    php81-fpm \
    php81-opcache \
    php81-pecl-apcu \
    php81-mysqli \
    php81-pgsql \
    php81-json \
    php81-openssl \
    php81-curl \
    php81-zlib \
    php81-soap \
    php81-xml \
    php81-fileinfo \
    php81-phar \
    php81-intl \
    php81-dom \
    php81-xmlwriter \
    php81-xmlreader \
    php81-ctype \
    php81-session \
    php81-iconv \
    php81-tokenizer \
    php81-zip \
    php81-simplexml \
    php81-mbstring \
    php81-mysqli \
    php81-pdo \
    php81-pdo_mysql \
    php81-gd

# Installing composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN rm -rf composer-setup.php

# Configure supervisor
RUN mkdir -p /etc/supervisor.d/
COPY ./supervisord.ini /etc/supervisor.d/supervisord.ini

# Configure PHP
RUN mkdir -p /run/php/
RUN touch /run/php/php8.1-fpm.pid

COPY ./php.ini-production /etc/php81/php.ini
COPY ./php-fpm.conf /etc/php81/php-fpm.conf

# Configure nginx
COPY ./nginx.conf /etc/nginx/
COPY ./nginx-laravel.conf /etc/nginx/modules/

RUN mkdir -p /run/nginx/
RUN touch /run/nginx/nginx.pid

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

# Building process
COPY . .

EXPOSE 8000
CMD ["supervisord", "-c", "/etc/supervisor.d/supervisord.ini"]