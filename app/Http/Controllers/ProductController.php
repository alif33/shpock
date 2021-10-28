<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:user', ['except' => ['index']]);
    }

    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {   
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|between:2,250',
                'description' => 'required|string|between:2,10000',
                'price' => 'required',
                'currency' => 'required',
                'featured' => 'required',
                'images' => 'required|string',
                'category_id' => 'required',
                'subcategory_id' => 'required',
                'nextcategory_id' => 'required',
                'user_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $category = Product::create(
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
                'title' => 'required|string|between:2,250',
                'description' => 'required|string|between:2,10000',
                'price' => 'required',
                'currency' => 'required',
                'featured' => 'required',
                'images' => 'required|string',
                'category_id' => 'required',
                'subcategory_id' => 'required',
                'nextcategory_id' => 'required',
                'user_id' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $category = Product::findOrFail($id)->update(
            array_merge(
                $validator->validated()
            )
        );
    }
    
    public function destory($id)
    {
       $category = Product::findOrFail($id);

       if($category)
       {
           $category->delete();
           return response()->json(
                ['message'=>'Product deleted successfully'],
                422
            );
       } 
    }

}
