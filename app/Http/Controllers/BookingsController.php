<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Booking;

class BookingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'first_name' => 'required',
            'last_name' => 'required',
            'cell_phone' => 'required',
            'email' => 'required',
            'xfer_date' => 'required',
            'xfer_time' => 'required',
            'origin' => 'required',
            'destination' => 'required',
            'num_adults' => 'required',
            'vehicle_type' => 'required',
            'xfer_cost' => 'required'
        ]);

        // Create Booking Record
        $booking = new Booking;

        $booking->first_name = $request->firstName;
        $booking->last_name = $request->lastName;
        $booking->cell_phone = $request->cellPhone;
        $booking->email = $request->email;
        $booking->xfer_date = $request->xfrDate;
        $booking->xfer_time = $request->xfrTime;
        $booking->origin = $request->origin;
        $booking->destination = $request->destination;
        $booking->num_adults = $request->numAdults;
        $booking->num_children = $request->numChildren;
        $booking->vehicle_type = $request->vehicleType;
        $booking->xfer_cost = $request->xfrCost;
        $booking->xfer_notes = $request->xfrNotes;
        
        $booking->save();

        return $booking->id;
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
