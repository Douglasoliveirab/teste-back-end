<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Product;

class ImportProduct extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:import-product {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import a product from the Fake Store API';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $productId = $this->argument('id'); // Obtém o ID passado como argumento

        // Faz a requisição para a API externa
        $response = Http::get("https://fakestoreapi.com/products/{$productId}");

        if ($response->successful()) {
            $productData = $response->json();

            Product::create([
                'name' => $productData['title'],
                'title' => $productData['title'],
                'price' => $productData['price'],
                'category' => $productData['category'],
                'description' => $productData['description'],
                'image' => $productData['image'],
            ]);

            $this->info('Produto importado com sucesso!');
        } else {
            $this->error('Erro ao buscar produto da API. Verifique se o ID está correto.');
        }
    }
}
