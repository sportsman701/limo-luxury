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
            $table->increments('id')->nullable($value = false);
            $table->string('type')->nullable($value = false);
            $table->text('description')->nullable($value = false);
            $table->integer('qty')->nullable($value = false);
            $table->integer('max_passenger')->nullable($value = false);
            $table->integer('max_luggage')->nullable($value = false);
            $table->string('image_link')->nullable($value = false);
            $table->string('base_rate')->nullable($value = false);
            $table->string('mileage_rate')->nullable($value = false);
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
        //
    }
}
