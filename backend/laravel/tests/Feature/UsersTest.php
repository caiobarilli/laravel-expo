<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Account;

use Laravel\Lumen\Testing\WithoutMiddleware;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UsersTest extends TestCase
{
    use WithoutMiddleware;

    protected function setUp(): void
    {
        parent::setUp();

        $permissions = [
            'users-list',
            'users-create',
            'users-edit',
            'users-delete'
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $permissions = Permission::pluck('id', 'id')->all();

        $owner = Role::create(['name' => 'owner']);

        $owner->syncPermissions($permissions);

        Role::create(['name' => 'user']);

        $account = Account::create(['name' => 'Acme Corporation']);

        $this->user = User::factory()->make([
            'account_id' => $account->id,
            'first_name' => 'João',
            'last_name' => 'Silva',
            'email' => 'joaodasilva@email.com',
            'role' => 'user'
        ])->assignRole('user');
    }

    public function test_cannot_list_users()
    {
        $this->withoutMiddleware();

        $this->actingAs($this->user)
            ->get('api/users')
            ->assertResponseStatus(403);
    }

    public function test_can_list_users()
    {
        $this->withoutMiddleware();

        User::factory()->count(5)->create(['account_id' => $this->user->account_id])
            ->each(function (User $user) {
                $user->assignRole('user');
            });

        $this->privilegedUser = User::first()->removeRole('user')->assignRole('owner');

        $this->actingAs($this->privilegedUser)
            ->get('api/users')
            ->assertResponseStatus(200);
    }

    public function test_can_search_for_users()
    {
        $this->withoutMiddleware();

        User::factory()->create(['account_id' => $this->user->account_id])
            ->each(function (User $user) {
                $user->assignRole('user');
            });

        User::first()->update([
            'first_name' => 'Greg',
            'role' => 'owner'
        ]);

        $this->privilegedUser = User::first()->removeRole('user')->assignRole('owner');

        $this->actingAs($this->privilegedUser)
            ->get('api/users?search=Greg')
            ->assertResponseStatus(200);
    }
}
