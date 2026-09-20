<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
    'order_id',
    'order_date',
    'payment_method',
    'status',
    'customer_name',
    'customer_email',
    'customer_mobile',
    'customer_state',
    'product_name',
    'product_imageUrl',
    'product_model',
    'price',
    'quantity',
    'discount',
    'delivery_charges',
    'total_amount',
];
}
