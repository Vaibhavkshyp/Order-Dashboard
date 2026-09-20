<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Order;

class OrderSeeder extends Seeder
{
    public function run(): void
    {
        Order::create([
            'order_id' => 'ORD001',
            'order_date' => '2026-09-20',
            'payment_method' => 'Card',
            'status' => 'Delivered',

            'customer_name' => 'Rahul Sharma',
            'customer_email' => 'rahul@example.com',
            'customer_mobile' => '9876543210',
            'customer_state' => 'Uttar Pradesh',

            'product_name' => 'Laptop',
            'product_imageUrl' => 'https://imgs.search.brave.com/9d05eVwgeGlgo-5RMU9rcxAcGbWrXplMzfek6hxDkwQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFmWndyZy1xZUwu/anBn',
            'product_model' => 'HP Pavilion',
            'price' => 55000,
            'quantity' => 1,
            'discount' => 2000,
            'delivery_charges' => 0,
            'total_amount' => 53000,
        ]);

        Order::create([
            'order_id' => 'ORD002',
            'order_date' => '2026-09-19',
            'payment_method' => 'Cash',
            'status' => 'Pending',

            'customer_name' => 'Priya Singh',
            'customer_email' => 'priya@example.com',
            'customer_mobile' => '9876543211',
            'customer_state' => 'Delhi',

            'product_name' => 'Wireless Mouse',
            'product_imageUrl' => 'https://imgs.search.brave.com/BqyFo2TICcCOL-jysnYU5BbDeN2lBdp_qqNebc_hQiw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vYmxhY2std2ly/ZWxlc3MtY29tcHV0/ZXItbW91c2Utd2l0/aC10ZXh0dXJlZC1z/dXJmYWNlLXdoaXRl/LWRvdHMtd29vZGVu/LWRlc2tfNTk0NDMw/LTE4OTkzLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA',
            'product_model' => 'Logitech M331',
            'price' => 1200,
            'quantity' => 2,
            'discount' => 100,
            'delivery_charges' => 50,
            'total_amount' => 2350,
        ]);
    }
}