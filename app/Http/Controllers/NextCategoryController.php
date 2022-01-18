<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\NextCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NextCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['index', 'show']]);
    }

    public function index()
    {
        return NextCategory::orderBy('id', 'DESC')->get();
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

        $next_category = NextCategory::create(
            array_merge(
                [
                    'nextcategory_slug' => Str::slug($request->nextcategory_name, '-')
                ],
                $validator->validated()
            )
        );

        if ($next_category) {
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
