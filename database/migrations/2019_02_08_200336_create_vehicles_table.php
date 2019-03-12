<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type')->nullable($value = false);
            $table->text('description')->nullable($value = false);
            $table->integer('qty')->nullable($value = false);
            $table->integer('max_passenger')->nullable($value = false);
            $table->integer('max_luggage')->nullable($value = false);
            $table->string('image_link')->nullable($value = false);
            $table->string('base_rate')->nullable($value = false);
            $table->string('mileage_rate')->nullable($value = false);
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
        Schema::dropIfExists('vehicles');
    }
}
