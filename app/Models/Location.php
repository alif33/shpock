<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;
    protected $table = 'locations';

    protected $fillable = [
        'street_number',
        'street_name',
        'town_city',
        'administrative_area',
        'postal_code',
        'country',
    ];

}
