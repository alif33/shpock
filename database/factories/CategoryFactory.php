<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_name' => $this->faker->name(),
            'category_slug' => $this->faker->slug(),
            'category_image' => $this->faker->image(),
        ];
    }
}
