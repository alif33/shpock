<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description', 1000);
            $table->decimal('price');
            $table->boolean('featured')->default(false);
            $table->text('images')->nullable();
            $table->bigInteger('category_id')->unsigned();
            $table->bigInteger('subcategory_id')->unsigned();
            $table->bigInteger('nextcategory_id')->unsigned();
            $table->bigInteger('currency_id')->unsigned();
            $table->string('street_number')->nullable();
            $table->string('street_name')->nullable();
            $table->string('town_city')->nullable();
            $table->string('administrative_area')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country');
            $table->bigInteger('user_id')->unsigned();
            $table->timestamps();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('subcategory_id')->references('id')->on('subcategories')->onDelete('cascade');
            $table->foreign('nextcategory_id')->references('id')->on('nextcategories')->onDelete('cascade');
            $table->foreign('currency_id')->references('id')->on('currencies')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
