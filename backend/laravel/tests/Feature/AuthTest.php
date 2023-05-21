<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Account;
use App\Models\User;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Hash;

class AuthTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    public function testLoginWithValidCredentials()
    {
        $account = Account::create(['name' => 'Acme Corporation']);

        User::factory(User::class)->create([
            'account_id' => $account->id,
            'first_name' => 'João',
            'last_name' => 'Silva',
            'email' => 'test@example.com',
            'password' =>  Hash::make('password'),
        ]);

        $response = $this->json('POST', 'api/auth/login', [
            'email' => 'test@example.com',
            'password' => 'password',
        ]);

        $response->seeJsonStructure([
            'access_token',
        ])->assertResponseOk();
    }

    public function testLoginWithInvalidCredentials()
    {
        $response = $this->json('POST', 'api/auth/login', [
            'email' => 'test@example.com',
            'password' => 'wrongpassword',
        ]);

        $response->seeJson([
            'error' => 'invalid credentials',
        ])->assertResponseStatus(203);
    }

    public function testLogout()
    {
        $account = Account::create(['name' => 'Acme Corporation']);

        User::factory(User::class)->create([
            'account_id' => $account->id,
            'first_name' => 'João',
            'last_name' => 'Silva',
            'email' => 'test123@example.com',
            'password' =>  Hash::make('password'),
        ]);

        $response = $this->json('POST', 'api/auth/login', [
            'email' => 'test123@example.com',
            'password' => 'password',
        ]);

        $token = $response->response->original['access_token'];

        $response = $this->json('POST', 'api/auth/logout', [], [
            'Authorization' => 'Bearer ' . $token,
        ]);

        $response->seeJson([
            'message' => 'User successfully signed out',
        ])->assertResponseStatus(200);
    }
}
