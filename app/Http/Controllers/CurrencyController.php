<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CurrencyController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin', ['except' => ['index']]);
    }


    public function index()
    {
        return Currency::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'currency_name' => 'required|string',
                'currency_code' => 'required|string',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $currency = Currency::create(
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
                'category_name' => 'required|string|between:2,30|unique:categories',
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
