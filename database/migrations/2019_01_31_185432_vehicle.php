<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Vehicle extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle', function(Blueprint $table) {
            $table->increments('id');
            $table->string('type');
            $table->text('description');
            $table->interger('qty');
            $table->integer('max_passenger');
            $table->integer('max_luggage');
            $table->string('image_link');
            $table->string('base_rate');
            $table->string('mileage_rate');
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
