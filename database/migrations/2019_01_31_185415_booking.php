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
        Schema::create('bookings', function(Blueprint $table) {
            $table->increments('id')->nullable($value = false);
            $table->string('first_name')->nullable($value = false);
            $table->string('last_name')->nullable($value = false);
            $table->string('phone_number');
            $table->string('cell_phone')->nullable($value = false);
            $table->string('email')->nullable($value = false);
            $table->date('xfer_date')->nullable($value = false);
            $table->time('xfer_time')->nullable($value = false);
            $table->string('pu_local')->nullable($value = false);
            $table->string('do_local')->nullable($value = false);
            $table->integer('num_adults')->nullable($value = false);
            $table->integer('num_children');
            $table->string('vehicle_type')->nullable($value = false);
            $table->decimal('xfer-cost', 9, 2)->nullable($value = false);
            $table->text('xfer_notes');
            $table->boolean('xfer_status')->nullable($value = false);
            $table->integer('xfer_confirmation')->nullable($value = false);
            $table->integer('xfer_cancel');
            $table->timestamps();
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
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
