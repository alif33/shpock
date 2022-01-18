<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FollowController extends Controller
{   
    public function __construct()
    {
        $this->middleware('auth:user', ['except' => ['followers', 'followings']]);
    }

    public function follow($id)
    {   
        $user = DB::table('user_follower')->where([
            'following_id'=> $id, 
            'follower_id'=>Auth::user()->id])->get();
        if ($user->count() >0) {
            return response()->json([
                'success' => true,
                'message' => 'Already followed.',
                'followings' => Auth::guard('user')->user()->followings
            ], 201);
        }else{
            $follow = User::find($id);
            Auth::guard('user')->user()->follow($follow);
            return response()->json([
                'success' => true,
                'message' => 'Successfully following.',
                'followings' => Auth::guard('user')->user()->followings
            ], 201);
        }
        
    }

    public function unfollow($id)
    {   
        $user = DB::table('user_follower')->where([
            'following_id'=> $id, 
            'follower_id'=>Auth::user()->id])->get();
        if ($user->count() >0) 
        {
            $follow = User::find($id);
            Auth::guard('user')->user()->unfollow($follow);
            return response()->json([
                'success' => true,
                'message' => 'Successfully unfollow.',
                'followings' => Auth::guard('user')->user()->followings
            ], 201); 
        }else
        {
            return response()->json([
                'success' => true,
                'message' => 'unfollowed.',
                'followings' => Auth::guard('user')->user()->followings
            ], 201);
        }
    }

    public function followers($id)
    {
        return User::find($id)->followers;
    }

    public function followings($id)
    {
        return User::find($id)->followings;  
    }
}



	
