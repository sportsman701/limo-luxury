<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vehicle;

class VehiclesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vehicleInfo = Vehicle::all();
        return response()->json($vehicleInfo);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('createVehicle');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'type' => 'required',
            'description' => 'required',
            'qty' => 'required',
            'max-passenger' => 'required',
            'max-luggage' => 'required',
            'image-link' => 'required',
            'base-rate' => 'required',
            'mileage-rate' => 'required',
        ]);        

        // Create Vehicle
        $vehicle = new Vehicle;
        
        $vehicle->type = $request->input('type');
        $vehicle->description = $request->input('description');
        $vehicle->qty = $request->input('qty');
        $vehicle->max_passenger = $request->input('max-passenger');
        $vehicle->max_luggage = $request->input('max-luggage');
        $vehicle->image_link = $request->input('image-link');
        $vehicle->base_rate = $request->input('base_rate');
        $vehicle->mileage_rate = $request->input('mileage-rate');
        $vehicle->user_id = auth()->user()->id;

        $vehicle->save();

        return redirect('/vehicles');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {        
        $vehicleInfo = Vehicle::find($id);
        return response()->json($vehicleInfo);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $vehicleInfo = Vehicle::find($id);
        return response()->json($vehicleInfo);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'type' => 'required',
            'description' => 'required',
            'qty' => 'required',
            'max-passenger' => 'required',
            'max-luggage' => 'required',
            'image-link' => 'required',
            'base-rate' => 'required',
            'mileage-rate' => 'required',
        ]);        

        // Update Vehicle
        $vehicle = Vehicle::find($id);
        
        $vehicle->type = $request->input('type');
        $vehicle->description = $request->input('description');
        $vehicle->qty = $request->input('qty');
        $vehicle->max_passenger = $request->input('max-passenger');
        $vehicle->max_luggage = $request->input('max-luggage');
        $vehicle->image_link = $request->input('image-link');
        $vehicle->base_rate = $request->input('base_rate');
        $vehicle->mileage_rate = $request->input('mileage-rate');
        $vehicle->user_id = auth()->user()->id;

        $vehicle->save();

        return redirect('/vehicles')->with('status', 'Vehicle Updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $vehicle = Vehicle::find($id);
        $vehicle->delete();
        return redirect('/vehicles')->with('status', 'Vehicle Deleted!');
        
    }
}