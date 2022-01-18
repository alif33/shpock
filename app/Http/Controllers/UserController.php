<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth:user', ['except' => ['login', 'register', 'info']]);

    }

    protected function guard()
    {
        return Auth::guard('user');

    }

    protected function respondWithToken($token)
    {
        return response()->json(   
            [   
                'success'        => true,
                'user'          => $this->guard()->user(),
                'token'          => $token,
                'token_type'     => 'bearer',
                'token_validity' => ($this->guard()->factory()->getTTL() * 60),
            ]
        );

    }

    public function login(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'email'    => 'required|email',
                'password' => 'required|string|min:6',
            ]
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $token_validity = (24 * 60);

        $this->guard()->factory()->setTTL($token_validity);

        if (!$token = $this->guard()->attempt($validator->validated())) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Creadentials'
            ], 401);
        }
        return $this->respondWithToken($token);
    }


    public function register(Request $request)
    {   

        $validator = Validator::make(
            $request->all(),
            [
                'name'     => 'required|string|between:2,100',
                'email'    => 'required|email|unique:users',
                'password' => 'required|confirmed|min:6',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $user = User::create(
            array_merge(
                $validator->validated(),
                [
                    'user_name' => Str::slug($request->name, '_'),
                    'password' => bcrypt($request->password)
                ]
            )
        );

        return response()->json([
            'message' => 'User created successfully', 
            'user' => $user
        ]);

    }

    public function update(Request $request)
    {   

        $validator = Validator::make(
            $request->all(),
            [
                'user_bio'     => 'string|between:2,250',
                'image'    => 'mimes:png,jpg,jpeg,gif|max:2048',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [$validator->errors()],
                422
            );
        }

        $profile = User::findOrFail(Auth::user()->id);

        if ($request
        ->file('image') && $image_path = $request
        ->file('image')->store('profile', 'public')) {
            $user = $profile->update(
                array_merge(
                    [
                        '_picture' => $image_path
                    ],
                    $validator->validated()
                )
            );
    
            if ($user) {
                return response()->json([
                    'message' => 'Profile updated successfully', 
                    'user' => User::findOrFail(Auth::user()->id)->first()
                ]);
            }
        }else{
            $user = $profile->update(
                $validator
                ->validated()
            );
    
            if ($user) {
                return response()->json([
                    'message' => 'Profile updated successfully', 
                    'user' => $user
                ]);
            }
        }  
    }


    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'User logged out successfully']);

    }

    public function info($id)
    {
      return User::where([
            'id' => $id 
        ])->get();
    }

    public function profile()
    {
        return response()->json($this->guard()->user());

    }

    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }
}
