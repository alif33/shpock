<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{   

    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['index']]);
    }

    public function index()
    {
        return Category::orderBy('id', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'category_name' => 'required|string|between:2,30|unique:categories',
                'category_icon' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $category = Category::create(
            array_merge(
                [
                    'category_slug' => Str::slug($request->category_name, '-')
                ],
                $validator->validated()
            )
        );

        if ($category) {
            return response()->json([
                'success' => true,
                'message' => 'Category created successfully.'
            ], 201);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'category_name' => 'required|string|between:2,30',
                'category_icon' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $category = Category::findOrFail($id)->update(
            array_merge(
                $validator->validated()
            )
        );

        if ($category) {
            return response()->json([
                'success' => true,
                'message' => 'Category updated successfully.'
            ], 201);
        }
    }
    
    public function destory($id)
    {
       $category = Category::findOrFail($id);

       if($category)
       {
           $category->delete();
           return response()->json(
                ['message'=>'Category deleted successfully'],
                422
            );
       } 
    }
}
