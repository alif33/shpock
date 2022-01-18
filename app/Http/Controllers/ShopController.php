<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShopController extends Controller
{
    public function shops()
    {   
        $users = User::all();
        $shops = [];

        foreach($users as $user)
        {
            $products = Product::where('user_id', $user['id'])->get();

            $shop = [
                'seller_id' => $user['id'],
                'profile_picture' => $user['_picture'],
                'shop_name' => $user['name'],
                'products' =>  $products
            ];
            array_push($shops, $shop);
        }
    
        return $shops;
    }
}
