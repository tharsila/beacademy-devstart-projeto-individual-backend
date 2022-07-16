<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "name"=> ['required', 'string', 'between:3,100'],
            'about'=> ['required', 'string'],
            'image'=> ['required', 'url', 'max:1000'],
            'location'=>['required', 'string'],
            'age'=> ['required', 'int'],
            'sex'=>['required', 'string'],
            'weight'=>['required', 'numeric'],
            'race'=>['required', 'string'],
            'size'=>['required', 'string'],
            'since'=>['required', 'string'],
        ];
    }
}
