<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Report;
use App\Models\Product;
use App\Models\Question;
use App\Models\Conversation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:user', ['except' => ['index', 'show', 'findByAuthor', 'conversations', 'findByCategory', 'findByCategorySlug', 'findBySubCategory', 'findBySubCategorySlug', 'findByNextCategory', 'findByNextCategorySlug']]);
    }

    public function index()
    {
        return Product::all();
    }

    public function show($id)
    {   
        return DB::table('products')
        ->join('categories', 'products.category_id', '=', 'categories.id')
        ->join('subcategories', 'products.subcategory_id', '=', 'subcategories.id')
        ->join('nextcategories', 'products.nextcategory_id', '=', 'nextcategories.id')
        ->join('currencies', 'products.currency_id', '=', 'currencies.id')
        ->select('products.*', 
            'categories.category_name', 'categories.category_slug', 'categories.category_icon',
            'subcategories.subcategory_name', 'subcategories.subcategory_slug', 'subcategories.subcategory_icon',
            'nextcategories.nextcategory_name', 'nextcategories.nextcategory_slug', 'nextcategories.nextcategory_icon',
            'currencies.currency_name', 'currencies.currency_code'
        )
        ->where('products.id', $id)
        ->first();
    }

    public function findByAuthor($id)
    {
        return Product::where(
            'user_id', $id
        )->orderBy('id', 'DESC')->get();
    }

    public function findByCategory($id)
    {
        return Product::where(
            'category_id', $id
        )->orderBy('id', 'DESC')->get();
    }

    public function findByCategorySlug($slg)
    {   
        return DB::table('products')
        ->join('categories', 'products.category_id', '=', 'categories.id')
        ->select('products.*', 
            'categories.category_name', 'categories.category_slug', 'categories.category_icon',
        )
        ->where('categories.category_slug', $slg)
        ->get();
    }

    public function findBySubCategory($id)
    {   
        return Product::where(
            'subcategory_id', $id
        )->orderBy('id', 'DESC')->get();
    }

    public function findBySubCategorySlug($slg)
    {   
        return DB::table('products')
        ->join('subcategories', 'products.subcategory_id', '=', 'subcategories.id')
        ->select('products.*', 
            'subcategories.subcategory_name', 'subcategories.subcategory_slug', 'subcategories.subcategory_icon',
        )
        ->where('subcategories.subcategory_slug', $slg)
        ->get();
    }

    public function findByNextCategory($id)
    {
        return Product::where(
            'nextcategory_id', $id
        )->orderBy('id', 'DESC')->get();
    }

    public function findByNextCategorySlug($slg)
    {
        return DB::table('products')
        ->join('nextcategories', 'products.nextcategory_id', '=', 'nextcategories.id')
        ->select('products.*', 
            'nextcategories.nextcategory_name', 'nextcategories.nextcategory_slug', 'nextcategories.nextcategory_icon',
        )
        ->where('nextcategories.nextcategory_slug', $slg)
        ->get();
    }

    public function wishlists()
    {   
        return User::find(Auth::user()->id)
            ->getFavoriteItems(Product::class)->get();
    }

    public function wishlist($id)
    {   
        $user = User::find(Auth::user()->id);
        $product = Product::find($id);
        $user->favorite($product);
        if($user->hasFavorited($product)){
            return response()->json(
                [   
                    'success' => true,
                    'message'=>'Product added into wishlist.'
                ],
                201
            ); 
        }
    }

    public function removeWishlist($id)
    {   
        $user = User::find(Auth::user()->id);
        $product = Product::find($id);
        $user->unfavorite($product);
        if(!$user->hasFavorited($product)){
            return response()->json(
                [   
                    'success' => true,
                    'message'=>'Product remove from wishlist.'
                ],
                201
            ); 
        }
    }

    public function makeoffer($id, Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'message' => 'required|string|between:2,250',
                'bid_price' => 'required|numeric',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $offer = Conversation::create(
            array_merge(
                $validator->validated(),
                [   
                    'product_id' => $id,
                    'user_id' => Auth::user()->id 
                ]
            )
        );

        if ($offer) {
            return response()->json([
                'success' => true,
                'message' => 'Offer created successfully.'
            ], 201);
        }
    }
    public function modifyoffer($id, Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'message' => 'required|string|between:2,250',
                'bid_price' => 'required|numeric',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $offer = Conversation::findOrFail($id)->update(
            array_merge(
                $validator->validated()
            )
        );

        if ($offer) {
            return response()->json([
                'success' => true,
                'message' => 'Offer updated successfully.'
            ], 201);
        }
    }

    public function reports()
    {
        
    }


    public function makereport($id, Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'report' => 'required|string|between:2,250',
            ]
        );
        
        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $report = Report::create(
            array_merge(
                $validator->validated(),
                [   
                    'product_id' => $id,
                    'user_id' => Auth::user()->id 
                ]
            )
        );

        if ($report) {
            return response()->json([
                'success' => true,
                'message' => 'Report created successfully.'
            ], 201);
        }
    }


    public function conversations($id)
    { 
        return Question::where([
            'product_id' => $id
        ])->get();
    }

    public function makeask($id, Request $request)
    { 
        $validator = Validator::make(
            $request->all(),
            [
                'question' => 'required|string|between:2,250'
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $status = '';
        if (Product::find($id)->author_id == Auth::user()->id) {
           $status = 'AUTH';
        }else{
            $status = 'USR';
        }

        $question = Question::create(
            array_merge(
                $validator->validated(),
                [ 
                    'product_id' => $id,
                    'status' => $status,
                    'asked_by' => Auth::user()->id 
                ]
            )
        );

        if ($question) {
            return response()->json([
                'success' => true,
                'message' => 'Question placed successfully.'
            ], 201);
        }
    }

    public function removeconversations($id)
    {   
        $question = Question::find($id);
        if($question->asked_by == Auth::user()->id) 
        {
            $question->delete();
            return response()->json([
                'success' => true,
                'message' => 'removed successfully.'
            ], 200);
        }
    }

    public function store(Request $request)
    {   

        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|between:2,250',
                'description' => 'required|string|between:2,10000',
                'price' => 'required',
                'images' => 'required',
                'featured' => 'required',
                'currency_id' => 'required|numeric',
                'category_id' => 'required|numeric',
                'subcategory_id' => 'required|numeric',
                'nextcategory_id' => 'required|numeric',
                'street_number' => 'string',
                'street_name' => 'string',
                'town_city' => 'string',
                'administrative_area' => 'string',
                'postal_code' => 'numeric',
                'country' => 'required|string',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

 
        if ($request->hasFile('images')) 
        {
            $image_paths = [];

            foreach($request->images as $image) {
                array_push($image_paths, [
                    $image->store('public/images')
                ]);
            }
            
            $product = Product::create(
                array_merge(
                    $validator->validated(),
                    [   
                        'images' => json_encode($image_paths),
                        'user_id' => Auth::user()->id 
                    ]
                )
            );

            if ($product) {
                return response()->json([
                    'success' => true,
                    'message' => 'Product created successfully.'
                ], 201);
            }

        }


        // if($request->hasFile('images')) {
            // $request->file('images');
            // $images = $request->file('images');
            // foreach ($images as $key => $img) {
            //     $images[$key] = $img->store('products', 'public');
            // }
            // return $images;
        // }else{


            // return 'Not found !';
          
    
           
        // }
        


        
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
       $product = Product::findOrFail($id);

       if($product)
       {
           $product->delete();
           return response()->json(
                ['message'=>'Product deleted successfully'],
                422
            );
       } 
    }

}




