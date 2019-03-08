<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('about');
});

Auth::routes();

Route::middleware(['auth'])->group(function(){
    Route::get('/home', 'HomeController@index');

    // Page Routes
    Route::get('/about', 'PagesController@about');
    Route::get('/booking', 'PagesController@booking');
    Route::get('/confirmation/{booking}', 'PagesController@show');
    Route::get('/vehicles', 'PagesController@vehicles');
    Route::get('/reports', 'PagesController@reports');
    Route::get('/search', 'PagesController@search');

    

});

Route::prefix('api')->middleware(['auth'])->group(function() {
    // API Routes
    Route::resource('/booking', 'BookingsController');
    Route::resource('/vehicles', 'VehiclesController');
});