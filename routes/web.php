<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/work', [WorkController::class, 'store']);