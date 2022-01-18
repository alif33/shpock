<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\NextCategoryController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\SocialAuthController;

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
    'prefix' => '/user'

], function () use ($router) {

    Route::post('/login', [UserController::class, 'login']);
    Route::post('/register', [UserController::class, 'register']);
    Route::post('/profile', [UserController::class, 'update']);
    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/info/{id}', [UserController::class, 'info']);
    Route::post('/refresh', 'UserController@refresh');
    Route::post('/me', 'UserController@me');

});



// Social Auth

Route::group([
    'prefix' => '/'

], function () use ($router) {

    Route::get('/login/{provider}', [SocialAuthController::class, 'redirectToProvider']);
    Route::get('/login/{provider}/callback', [SocialAuthController::class, 'handleProviderCallback']);
});



// Admin

Route::group([
    'prefix' => '/admin'

], function () use ($router) {

    Route::post('/login', [AdminController::class, 'login']);
    Route::post('/register', [AdminController::class, 'register']);
    Route::get('/reports', [AdminController::class, 'reports']);
    Route::post('refresh', 'UserController@refresh');
    Route::post('me', 'UserController@me');

});


// Category

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('/categories', [CategoryController::class, 'index']);
        Route::get('/category/{id}', [CategoryController::class, 'show']);
        Route::post('/category', [CategoryController::class, 'store']);
        Route::put('/category/{id}', [CategoryController::class, 'update']);
        Route::delete('/category/{id}', [CategoryController::class, 'destory']);
    }
);


// SubCategory

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('/subcategories', [SubCategoryController::class, 'index']);
        Route::get('/subcategory/{id}', [SubCategoryController::class, 'show']);
        Route::post('/subcategory', [SubCategoryController::class, 'store']);
        Route::put('/subcategory/{id}', [SubCategoryController::class, 'update']);
        Route::delete('/subcategory/{id}', [SubCategoryController::class, 'destory']);
    }
);


// NextCategory

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('/nextcategories', [NextCategoryController::class, 'index']);
        Route::get('/nextcategory/{id}', [NextCategoryController::class, 'show']);
        Route::post('/nextcategory', [NextCategoryController::class, 'store']);
        Route::put('/nextcategory/{id}', [NextCategoryController::class, 'update']);
        Route::delete('/nextcategory/{id}', [NextCategoryController::class, 'destory']);
    }
);


// Category

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('/currencies', [CurrencyController::class, 'index']);
        Route::get('/currency/{id}', [CurrencyController::class, 'show']);
        Route::post('/currency', [CurrencyController::class, 'store']);
        Route::put('/currency/{id}', [CurrencyController::class, 'update']);
        Route::delete('/currency/{id}', [CurrencyController::class, 'destory']);
    }
);



// Product 

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('/product/wishlists', [ProductController::class, 'wishlists']);
        Route::post('/product/w/insert/{id}', [ProductController::class, 'wishlist']);
        Route::post('/product/w/remove/{id}', [ProductController::class, 'removeWishlist']);
        Route::post('/product/makeoffer/{id}', [ProductController::class, 'makeoffer']);
        Route::put('/product/modifyoffer/{id}', [ProductController::class, 'modifyoffer']);
        Route::post('/product/report/{id}', [ProductController::class, 'makereport']);
        Route::get('/product/conversations/{id}', [ProductController::class, 'conversations']);
        Route::post('/product/ask/{id}', [ProductController::class, 'makeask']);
        Route::delete('/product/ask/remove/{id}', [ProductController::class, 'removeconversations']);
        Route::get('/products', [ProductController::class, 'index']);
        Route::get('/product/{id}', [ProductController::class, 'show']);        
        Route::post('/product', [ProductController::class, 'store']);
        Route::get('/products/author/{id}', [ProductController::class, 'findByAuthor']);
        Route::put('/product/{id}', [ProductController::class, 'update']);
        Route::delete('/product/{id}', [ProductController::class, 'destory']);
        Route::get('/product/c/{id}', [ProductController::class, 'findByCategory']);
        Route::get('/product/s/{id}', [ProductController::class, 'findBySubCategory']);
        Route::get('/product/n/{id}', [ProductController::class, 'findByNextCategory']);
        Route::get('/product/c/slug/{slg}', [ProductController::class, 'findByCategorySlug']);
        Route::get('/product/s/slug/{slg}', [ProductController::class, 'findBySubCategorySlug']);
        Route::get('/product/n/slug/{slg}', [ProductController::class, 'findByNextCategorySlug']);
    }
);

// Shop 

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::get('/shops', [ShopController::class, 'shops']);
    }
);


// Follow

Route::group(
    [
        'prefix' => '/'
    ],
    function ($router) {
        Route::post('/follow/{id}', [FollowController::class, 'follow']);
        Route::post('/unfollow/{id}', [FollowController::class, 'unfollow']);
        Route::get('/followers/{id}', [FollowController::class, 'followers']);
        Route::get('/followings/{id}', [FollowController::class, 'followings']);
    }
);
