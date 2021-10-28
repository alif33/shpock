<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['show']]);
    }

    public function index()
    {
        return SubCategory::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'subcategory_name' => 'required|string|between:2,30|unique:subcategories',
                'subcategory_icon' => 'required|string|between:2,500',
                'category_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $category = SubCategory::create(
            array_merge(
                $validator->validated()
            )
        );
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'subcategory_name' => 'required|string|between:2,30|unique:subcategories',
                'subcategory_icon' => 'required|string|between:2,500',
                'category_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $category = SubCategory::findOrFail($id)->update(
            array_merge(
                $validator->validated()
            )
        );
    }
    
    public function destory($id)
    {
       $category = SubCategory::findOrFail($id);

       if($category)
       {
           $category->delete();
           return response()->json(
                ['message'=>'SubCategory deleted successfully'],
                422
            );
       } 
    }
}
