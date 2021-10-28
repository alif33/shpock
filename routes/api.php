<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\NextCategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// User

Route::group([
    'prefix' => 'user'

], function () use ($router) {

    Route::post('login', [UserController::class, 'login']);
    Route::post('register', [UserController::class, 'register']);
    Route::post('logout', 'UserController@logout');
    Route::post('refresh', 'UserController@refresh');
    Route::post('me', 'UserController@me');

});


// Admin

Route::group([
    'prefix' => 'admin'

], function () use ($router) {

    Route::post('login', [AdminController::class, 'login']);
    Route::post('register', [AdminController::class, 'register']);
    Route::post('refresh', 'UserController@refresh');
    Route::post('me', 'UserController@me');

});


// Category

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('categories', [CategoryController::class, 'index']);
        Route::get('category/{id}', [CategoryController::class, 'show']);
        Route::post('category', [CategoryController::class, 'store']);
        Route::put('category/{id}', [CategoryController::class, 'update']);
        Route::delete('category/{id}', [CategoryController::class, 'destory']);
    }
);


// SubCategory

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('subcategories', [SubCategoryController::class, 'index']);
        Route::get('subcategory/{id}', [SubCategoryController::class, 'show']);
        Route::post('subcategory', [SubCategoryController::class, 'store']);
        Route::put('subcategory/{id}', [SubCategoryController::class, 'update']);
        Route::delete('subcategory/{id}', [SubCategoryController::class, 'destory']);
    }
);


// NextCategory

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('nextcategories', [NextCategoryController::class, 'index']);
        Route::get('nextcategory/{id}', [NextCategoryController::class, 'show']);
        Route::post('nextcategory', [NextCategoryController::class, 'store']);
        Route::put('nextcategory/{id}', [NextCategoryController::class, 'update']);
        Route::delete('nextcategory/{id}', [NextCategoryController::class, 'destory']);
    }
);



// Product 

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('products', [ProductController::class, 'index']);
        Route::get('product/{id}', [ProductController::class, 'show']);
        Route::post('product', [ProductController::class, 'store']);
        Route::put('product/{id}', [ProductController::class, 'update']);
        Route::delete('product/{id}', [ProductController::class, 'destory']);
    }
);


// Follow

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::post('follow/{id}', [FollowController::class, 'follow']);
        Route::post('unfollow/{id}', [FollowController::class, 'unfollow']);
        Route::post('followers/{id}', [FollowController::class, 'followers']);
        Route::post('followings/{id}', [FollowController::class, 'followings']);
    }
);
