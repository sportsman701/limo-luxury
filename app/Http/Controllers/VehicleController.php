<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function index() 
    {
        $vehicles = Vehicles::all();

        return view('vehicle')->with([
            'vehicle' => $vehicles
        ]);
    }
}
