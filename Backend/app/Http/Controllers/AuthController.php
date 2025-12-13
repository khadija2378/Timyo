<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegiterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index()
    {
        $user=User::all();
         return response()->json(['message'=>'All users',
                                  'appointment'=>$user]);
    }

    public function register(RegiterRequest $request){
       $user= $request->validated();

       $data=User::create($user);
       Auth::login($data);
       return response()->json([
    'message' => 'Registration success',
    'user' => $data
]);


    }
    public function login(LoginRequest $request){
        $request->validated();
        $user=User::where('email',$request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json(['message'=>'Email ou Password  invalide']);
        }
        Auth::login($user);
       return response()->json([
            'message' => 'Login success',
             'user' => $user
        ]);
    }

    public function logout(Request $request)
{
    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return response()->json([
        'message' => 'Logged out successfully'
    ]);
}
}
