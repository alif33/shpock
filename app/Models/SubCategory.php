<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;
    
    protected $table = 'subcategories';

    protected $fillable = [
        'subcategory_name',
        'subcategory_slug',
        'subcategory_icon',
        'category_id',
    ];
    
}

