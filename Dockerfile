
# Stage 1: Build React assets
FROM node:22-alpine AS frontend

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# Stage 2: Install PHP dependencies
FROM composer:2 AS dependencies

WORKDIR /app

COPY composer.json composer.lock ./

RUN composer install \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader


# Stage 3: Laravel application
FROM php:8.3-cli

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    && docker-php-ext-install pdo_sqlite \
    && rm -rf /var/lib/apt/lists/*

COPY --from=dependencies /app/vendor ./vendor
COPY --from=frontend /app/public/build ./public/build

COPY . .

RUN mkdir -p database storage/framework/cache \
    storage/framework/sessions \
    storage/framework/views \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 10000

CMD ["sh", "-c", "php artisan serve --host=0.0.0.0 --port=${PORT:-10000}"]