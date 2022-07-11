<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    /**
     *  Retorna a lista de pets cadastrados
     *
     * @return collection
     */
    public function index()
    {
       return Pet::get();
    }
}
