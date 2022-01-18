<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NextCategory extends Model
{
    use HasFactory;

    protected $table = 'nextcategories';

    protected $fillable = [
        'nextcategory_name',
        'nextcategory_slug',
        'nextcategory_icon',
        'category_id',
        'subcategory_id',
    ];
    
}
