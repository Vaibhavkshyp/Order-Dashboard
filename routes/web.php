<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;

Route::get('/', function(){
    return view("app");
});

Route::get('/api/orders', [OrderController::class, 'index']);