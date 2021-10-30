<?php

namespace Database\Factories;

use App\Models\NextCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class NextCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = NextCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->text(10);

        return [
            'nextcategory_name' => $name,
            'nextcategory_icon' => 'icon',
            'nextcategory_image' => 'image',
            'category_id' => rand(1 , 10),
            'subcategory_id' => rand(1 , 10),
        ];
    }
}
