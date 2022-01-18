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
                'currency_name' => 'required|string|unique:currencies',
                'currency_code' => 'required|string|unique:currencies',
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

        if ($currency) {
            return response()->json([
                'success' => true,
                'message' => 'Currency added successfully.'
            ], 201);
        }
    }

    public function update(Request $request, $id)
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

        $currency = Currency::findOrFail($id)->update(
            array_merge(
                $validator->validated()
            )
        );

        if ($currency) {
            return response()->json([
                'success' => true,
                'message' => 'Currency updated successfully.'
            ], 200);
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
