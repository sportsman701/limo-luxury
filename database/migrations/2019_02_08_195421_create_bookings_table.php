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
            $table->string('first_name')->nullable($value = false);
            $table->string('last_name')->nullable($value = false);
            $table->string('phone_number');
            $table->string('cell_phone')->nullable($value = false);
            $table->string('email')->nullable($value = false);
            $table->date('xfer_date')->nullable($value = false);
            $table->time('xfer_time')->nullable($value = false);
            $table->string('origin')->nullable($value = false);
            $table->string('destination')->nullable($value = false);
            $table->integer('num_adults')->nullable($value = false);
            $table->integer('num_children');
            $table->string('vehicle_type')->nullable($value = false);
            $table->decimal('xfer_cost', 9, 2)->nullable($value = false);
            $table->mediumText('xfer_notes');
            $table->boolean('xfer_status');
            $table->integer('xfer_confirmation');
            $table->integer('xfer_cancel');
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
