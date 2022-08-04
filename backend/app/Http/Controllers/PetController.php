<?php

namespace App\Http\Controllers;

use App\Http\Requests\PetRequest;
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

    /**
     * Cria um pet no banco de dados
     *
     * @param PetRequest $request
     * @return Pet
     */
    public function store(PetRequest $request)
    {
        $petData = $request->all();

        return Pet::create($petData);
    }

    /**
     * Visualiza um pet específico
     *
     * @param int $id
     * @return Pet
     */
    public function show($id)
    {
        $petId = Pet::find($id);
        if($petId) {
            return $petId;
        }

        return response()->json([
            'message' => 'Erro ao pesquisar um pet!'
        ], 404);
    }

    /**
     * Atualiza um pet específico
     *
     * @param Request $request
     * @param int $id
     * @return $pet
     */
    public function update(Request $request, $id)
    {
        $petDataUpdate = $request->all();
        $pet = Pet::find($id);
        if($pet) {
            $pet->update($petDataUpdate);
            return $pet;
        }
        return response()->json([
            'message' => 'Erro ao pesquisar um pet!'
        ], 404);
    }

    /**
     * Remove um pet específico
     *
     * @param int $id
     * @return Pet
     */
    public function destroy($id)
    {
        if(Pet::destroy($id)) {
            return response()->json([
                'message' => 'Pet removido com sucesso!'
            ], 201);
        }

        return response()->json([
            'message' => 'Erro ao remover um pet!'
        ], 404);
    }


}
