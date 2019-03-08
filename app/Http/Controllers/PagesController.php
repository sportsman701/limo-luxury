<?php

namespace App\Http\Controllers;

use App\Booking;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function about() 
    {
        return view('about');
    }

    public function booking() 
    {
        return view('booking');
    }

    public function show($bookingID)
    {
        $confirmID = Booking::find($bookingID);

        return view('confirmation')->with([
            'confirmationNum' => $confirmID->id,
            'firstName' => $confirmID->first_name,
            'lastName' => $confirmID->last_name,
            'cellPhone' => $confirmID->last_name,
            'email' => $confirmID->email,
            'xfrDate' => $confirmID->xfer_date,
            'xfrTime' => $confirmID->xfer_time,
            'origin' => $confirmID->origin,
            'destination' => $confirmID->destination,
            'numAdults' => $confirmID->num_adults,
            'numChildren' => $confirmID->num_children,
            'vehicleType' => $confirmID->vehicle_type,
            'xfrNotes' => $confirmID->xfer_notes
        ]);
    }

    public function vehicles() 
    {
        return view('vehicles');
    }

    public function reports() 
    {
        return view('reports');
    }

    public function search()
    {
        return view('search');
    }


}
