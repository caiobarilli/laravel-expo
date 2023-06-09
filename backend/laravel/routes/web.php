<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

// API
Route::group([
    'prefix' => 'api',
], function () {

    // Auth
    Route::group([
        'prefix' => 'auth',
    ], function () {
        Route::post('register', 'AuthController@register');
        Route::post('login', 'AuthController@login');

        Route::group([
            'middleware' => 'auth:api'
        ], function () {
            Route::post('logout', 'AuthController@logout');
        });
    });

    // User
    Route::group([
        'prefix' => 'user',
        'middleware' =>  'role:user'
    ], function () {

        // User
        Route::post('profile', 'AuthController@profile');
    });

    // Users
    Route::group([
        'prefix' => 'users',
        'middleware' => 'role:owner',
    ], function () {

        // Users
        Route::get('/', 'UsersController@index');
        Route::post('/store', 'UsersController@store');
        Route::put('update/{user}', 'UsersController@update');
        Route::delete('delete/{user}', 'UsersController@destroy');
        Route::put('restore/{user}', 'UsersController@restore');
    });
});
