<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Overtrue\LaravelFavorite\Traits\Favoriteable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory, Favoriteable;

    protected $table = 'products';

    protected $fillable = [
        'title',
        'description',
        'price',
        'featured',
        'images',
        'currency_id',
        'category_id',
        'subcategory_id',
        'nextcategory_id',
        'street_number',
        'street_name',
        'town_city',
        'administrative_area',
        'postal_code',
        'country',
        'user_id'
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
