
# Order Dashboard

A full-stack order management dashboard built using Laravel, React, and Tailwind CSS. It allows users to view and search customer orders through a simple and responsive interface.

## 🚀 Live Demo

[View Live Project](https://order-dashboard-wzhw.onrender.com)

## 🛠️ Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Laravel 13
- **Database:** SQLite
- **Build Tool:** Vite
- **Deployment:** Docker and Render

## ✨ Features

- Display customer orders
- Search orders by:
  - Order ID
  - Customer name
  - Email
  - Mobile number
- View order details
- REST API for retrieving orders
- Responsive dashboard interface
- Docker-based deployment

## 📁 Project Structure

```text
order-dashboard/
├── app/
├── database/
├── resources/
│   ├── js/
│   ├── css/
│   └── views/
├── routes/
├── public/
├── Dockerfile
├── package.json
└── composer.json
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Vaibhavkshyp/Order-Dashboard.git
cd order-dashboard
```

### 2. Install dependencies

Install Laravel dependencies:

```bash
composer install
```

Install frontend dependencies:

```bash
npm install
```

### 3. Configure environment

```bash
copy .env.example .env
php artisan key:generate
```

### 4. Set up the database

Create the SQLite database:

```powershell
New-Item database/database.sqlite -ItemType File
```

Run migrations and seed sample data:

```bash
php artisan migrate
php artisan db:seed
```

### 5. Run the application

Start the Laravel server:

```bash
php artisan serve
```

Start the frontend development server in another terminal:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:8000
```

## 🔗 API Endpoint

### Get all orders

```http
GET /api/orders
```

Example:

```text
http://127.0.0.1:8000/api/orders
```

## 🐳 Docker

Build the Docker image:

```bash
docker build -t order-dashboard .
```

Run the container:

```bash
docker run --rm -p 10000:10000 order-dashboard
```

Open:

```text
http://localhost:10000
```

## ☁️ Deployment

The application is deployed using:

- Docker
- Render
- Laravel
- React and Vite

## 👨‍💻 Author

**Vaibhav Kashyap**

B.Tech – Information Technology
