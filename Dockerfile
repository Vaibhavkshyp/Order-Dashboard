# ==========================================
# Stage 1: Build React frontend assets
# ==========================================
FROM node:22-alpine AS frontend

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install frontend dependencies
RUN npm ci

# Copy complete project
COPY . .

# Build React/Vite assets
RUN npm run build


# ==========================================
# Stage 2: Install Laravel dependencies
# ==========================================
FROM composer:2 AS dependencies

WORKDIR /app

# Copy complete Laravel project
COPY . .

# Install PHP dependencies without running scripts
RUN composer install \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader \
    --no-scripts


# ==========================================
# Stage 3: Laravel production application
# ==========================================
FROM php:8.4-cli

WORKDIR /app

# Install required PHP extensions
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    && docker-php-ext-install pdo_sqlite \
    && rm -rf /var/lib/apt/lists/*

# Copy Composer dependencies
COPY --from=dependencies /app/vendor ./vendor

# Copy built frontend assets
COPY --from=frontend /app/public/build ./public/build

# Copy Laravel application
COPY . .

# Create SQLite database
RUN mkdir -p database \
    && touch database/database.sqlite

# Create Laravel directories
RUN mkdir -p \
    storage/framework/cache \
    storage/framework/sessions \
    storage/framework/views \
    bootstrap/cache

# Set permissions
RUN chmod -R 775 storage bootstrap/cache

# Generate Laravel package discovery files
RUN php artisan package:discover --ansi

EXPOSE 10000

CMD ["sh", "-c", "php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=${PORT:-10000}"]