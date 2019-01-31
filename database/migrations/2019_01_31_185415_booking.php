<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Booking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function(Bluepring $table) {
            $table->increment('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('phone_number');
            $table->string('cell_phone');
            $table->string('email');
            $table->string('xfer_date');
            $table->string('xfer_time');
            $table->string('pu_local');
            $table->string('do_local');
            $table->integer('num_adults');
            $table->integer('num_children');
            $table->string('vehicle_type');
            $table->string('xfer-cost');
            $table->text('xfer_notes');
            $table->string('xfer_status');
            $table->increments('xfer_confirmation');
            $table->increments('xfer_cancel');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
