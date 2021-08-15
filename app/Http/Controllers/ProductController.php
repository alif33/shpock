<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function show()
    {
        return Product::orderBy('id', 'DESC')->get();
    }
    function create(Request $req)
    {
        $category = new Product();
        $category->category_name = $req->name;
        $category->category_slug = $req->slug;
        $category->save();
        return $category;
    }
    function update(Request $req)
    {
        $category = Product::find($req->id);
        $category->delete();
        return $category;
    }
    function destory(Request $req)
    {
        $category = Product::find($req->id);
        $category->delete();
        return $category;
    }
}
