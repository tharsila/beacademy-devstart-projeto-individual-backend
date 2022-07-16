<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adoption extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'price',
        'pet_id',
    ];

    
    /**
     * Define a relação da adoção com o pet
     * @return BelongsTo
     */
    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
