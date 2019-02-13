<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('phone_number')->nullable();
            $table->string('cell_phone');
            $table->string('email');
            $table->date('xfer_date');
            $table->time('xfer_time');
            $table->string('origin');
            $table->string('destination');
            $table->integer('num_adults');
            $table->integer('num_children')->nullable();
            $table->string('vehicle_type')->nullable();
            $table->decimal('xfer_cost', 9, 2)->nullable();
            $table->mediumText('xfer_notes');
            $table->boolean('xfer_status')->nullable();
            $table->integer('xfer_confirmation')->nullable();
            $table->integer('xfer_cancel')->nullable();
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
        Schema::dropIfExists('bookings');
    }
}
