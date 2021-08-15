<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function show()
    {
        return Category::orderBy('id', 'DESC')->get();
    }
    function create(Request $req)
    {
        $category = new Category();
        $category->category_name = $req->name;
        $category->category_slug = $req->slug;
        $category->save();
        return $category;
    }
    function update(Request $req, $id)
    {
        $category = Category::find($id);
        $category->category_name = $req->name;
        $category->category_slug = $req->slug;
        $category->update();
        return response()->json(['status'=>true, 'message'=>'Category deleted successfully!'], 202);
    }
    function destory($id)
    {
        $category = Category::find($id);
            if($category){
                $category->delete();
                return response()->json(['status'=>true, 'message'=>'Category deleted successfully!'], 202);
            }else{
                return response()->json(['status'=>false, 'message'=>'Category not found!'], 204);
            }
    }
}
