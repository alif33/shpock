<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['index', 'show']]);
    }

    public function index()
    {
        return SubCategory::orderBy('id', 'DESC')->get();
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

        $subcategory = SubCategory::create(
            array_merge(
                [
                    'subcategory_slug' => Str::slug($request->subcategory_name, '-')
                ],
                $validator->validated()
            )
        );

        if ($subcategory) {
            return response()->json([
                'success' => true,
                'message' => 'Sub Category created successfully.'
            ], 201);
        }
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
