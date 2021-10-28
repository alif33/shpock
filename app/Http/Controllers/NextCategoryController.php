<?php

namespace App\Http\Controllers;

use App\Models\NextCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NextCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['show']]);
    }

    public function index()
    {
        return NextCategory::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'nextcategory_name' => 'required|string|between:2,30|unique:nextcategories',
                'nextcategory_icon' => 'required|string|between:2,500',
                'category_id' => 'required',
                'subcategory_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $category = NextCategory::create(
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
                'nextcategory_name' => 'required|string|between:2,30',
                'nextcategory_icon' => 'required|string|between:2,500',
                'category_id' => 'required',
                'subcategory_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $category = NextCategory::findOrFail($id)->update(
            array_merge(
                $validator->validated()
            )
        );
    }
    
    public function destory($id)
    {
       $category = NextCategory::findOrFail($id);

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
