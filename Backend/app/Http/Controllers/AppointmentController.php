<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Http\Requests\StoreAppointmentRequest;
use App\Http\Requests\UpdateAppointmentRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AppointmentController extends Controller
{

    public function index()
    {
        $appointment=Appointment::with('user')->get();
         return response()->json(['message'=>'All appointment',
                                  'appointment'=>$appointment]);
    }

    public function store(StoreAppointmentRequest $request)
    {
        $app=$request->validated();
        $app['user_id']=Auth::user()->id;
        $appointment=Appointment::create($app);
        return response()->json(['message'=>'appointment est ajouter',
                                  'appointment'=>$appointment]);
    }


    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return response()->json(['message'=>'appointment est supprimer']);
    }
}
