<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            // Order information
            $table->string('order_id')->unique();
            $table->date('order_date');
            $table->string('payment_method');
            $table->string('status')->default('pending');

            // Customer information
            $table->string('customer_name');
            $table->string('customer_email');
            $table->string('customer_mobile');
            $table->string('customer_state');

            // Product information
            $table->string('product_name');
            $table->string('product_imageUrl');
            $table->string('product_model')->nullable();
            $table->decimal('price', 10, 2);
            $table->unsignedInteger('quantity')->default(1);
            $table->decimal('discount', 10, 2)->default(0);
            $table->decimal('delivery_charges', 10, 2)->default(0);
            $table->decimal('total_amount', 10, 2);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};