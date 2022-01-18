<?php

namespace Database\Factories;

use App\Models\SubCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class SubCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SubCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        $name = $this->faker->text(10);
        
        return [
            'subcategory_name' => $name,
            'subcategory_slug' => 'suncategory_slug',
            'subcategory_icon' => 'image',
            'subcategory_image' => 'image',
            'category_id' => rand(1, 7)
        ];
    }
}
