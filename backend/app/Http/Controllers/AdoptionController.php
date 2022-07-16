<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdoptionCollection;
use App\Models\Adoption;
use App\Rules\UniqueAdoptionPet;
use Illuminate\Http\Request;

class AdoptionController extends Controller
{
    public function index()
    {
       $adoptions = Adoption::with('pet')->get();
       return new AdoptionCollection($adoptions);
    }


    /**
     * Cria um novo registro de adoção
     *
     * @param Request $request
     * @return Adoption
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => ['required'],
            "email" => ['required', 'email', new UniqueAdoptionPet($request->input('pet_id', 0))],
            "price" => ['required', 'numeric', 'between:10,100'],
            "pet_id" => ['required', 'int', 'exists:pets,id']
        ]);
        $adoptionData = $request->all();
        return Adoption::create($adoptionData);
    }
}
