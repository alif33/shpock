<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowController extends Controller
{   
    public function __construct()
    {
        $this->middleware('auth:user');
    }

    public function follow($id)
    {   
        $follow = User::find($id);
        Auth::guard('user')->user()->follow($follow);
        return Auth::guard('user')->user()->followings;
    }

    public function unfollow($id)
    {
        $follow = User::find($id);
        Auth::guard('user')->user()->unfollow($follow);
        return Auth::guard('user')->user()->followings;  
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
