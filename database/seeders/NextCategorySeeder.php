<?php

namespace Database\Seeders;

use App\Models\NextCategory;
use Illuminate\Database\Seeder;

class NextCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        NextCategory::factory()->times(10)->create();
    }
}
