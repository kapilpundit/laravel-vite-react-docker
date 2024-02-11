<?php

use Illuminate\Support\Facades\Route;
use Elastic\Elasticsearch\ClientBuilder;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return inertia('Welcome');
 });

Route::get('/es', function () {
    $client = ClientBuilder::create()
    ->setHosts(config('database.connections.elasticsearch.hosts'))
    ->setBasicAuthentication(
        config('database.connections.elasticsearch.username'),
        config('database.connections.elasticsearch.password')
    )
    ->build();

    // Example search query
    $params = [
        'index' => 'expenses',
        'body' => [
            'query' => [
                'match' => [
                    'type' => 'household',
                ],
            ],
        ],
    ];

    $response = $client->search($params);

    dd($response->asArray());

    return $response->asArray();
 });
