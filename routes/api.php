<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubCategoryController;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



// ++++++ Category ++++++

Route::group(['prefix'=>'category'], function(){
    Route::get('/', [CategoryController::class, 'show']);
});

Route::group(['prefix'=>'category', 'as'=>'category'], function(){
    Route::post('/create', [CategoryController::class, 'create']);
    Route::put('/update/{id}', [CategoryController::class, 'update']);
    Route::delete('/delete/{id}', [CategoryController::class, 'destory']);
});


// ++++++ Sub Category ++++++

Route::group(['prefix'=>'subcategory'], function(){
    Route::get('/', [SubCategoryController::class, 'show']);
});

Route::group(['prefix'=>'subcategory', 'as'=>'subcategory'], function(){
    Route::post('/create', [SubCategoryController::class, 'create']);
    Route::put('/update/{id}', [SubCategoryController::class, 'update']);
    Route::post('/delete/{id}', [SubCategoryController::class, 'destory']);
});


