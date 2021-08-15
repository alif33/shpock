<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    function show()
    {
        return SubCategory::orderBy('id', 'DESC')->get();
    }
    function create(Request $req)
    {
        $subcategory = new SubCategory();
        $subcategory->subcategory_name = $req->name;
        $subcategory->subcategory_slug = $req->slug;
        $subcategory->category_id = $req->category_id;
        $subcategory->subcategory_image = $req->image;
        $subcategory->save();
        return $subcategory;
    }
    function update(Request $req, $id)
    {
        $category = SubCategory::find($req->id);
        $category->delete();
        return $category;
    }
    function destory($id)
    {
        $subcategory = SubCategory::find($id);
        if($subcategory){
            if($subcategory->delete()){
                return 'Subcategory deleted successfully !';
            }else{
                return 'Subcategory not found !';
            }
        }else{
            return 'Subcategory not found !';
        }
    }
}
