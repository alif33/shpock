<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'title',
        'description',
        'price',
        'currency',
        'featured',
        'images',
        'category_id',
        'subcategory_id',
        'nextcategory_id',
        'user_id',
    ];
    
}
