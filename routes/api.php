<?php

use App\Http\Controllers\PetController;
use App\Http\Controllers\AdoptionController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
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

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::get('/dashboard', [PetController::class, 'dashboard']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('/pets',[PetController::class, 'index']);
Route::post('/pets',[PetController::class, 'store']);
Route::get('/pets/{id}',[PetController::class, 'show']);
Route::put('/pets/{id}',[PetController::class, 'update']);
Route::delete('/pets/{id}',[PetController::class, 'destroy']);

Route::get('/adocoes',[AdoptionController::class, 'index']);
Route::post('/adocoes',[AdoptionController::class, 'store']);
