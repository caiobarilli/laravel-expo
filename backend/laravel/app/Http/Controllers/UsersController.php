<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Requests\UserDeleteRequest;
use App\Http\Resources\UserCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class UsersController extends Controller
{

    /**
     * Display a listing of users.
     *
     * @return \App\Http\Resources\UserCollection
     */
    public function index()
    {
        if (Auth::user()->can('users-list')) {

            return response()->json([
                'users' => new UserCollection(
                    Auth::user()->account->users()
                        ->orderByName()
                        ->filter(Request::only('search', 'role', 'trashed'))
                        ->paginate()
                        ->appends(Request::all())
                ),
            ], 200);
        }

        return response()->json([
            'message' => 'You are not authorized to view users',
        ], 403);
    }

    /**
     * Store a newly created user in storage.
     *
     * @param  \App\Http\Requests\UserStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserStoreRequest $request)
    {
        if (Auth::user()->can('users-create')) {

            $user = Auth::user()->account->users()->create($request->validated());

            return response()->json([
                'user' => $user,
                'message' => 'User created successfully',
            ], 201);
        }

        return response()->json([
            'message' => 'You are not authorized to create users',
        ], 403);
    }

    /**
     * Display the specified user.
     *
     * @param  \App\User\id  $user
     * @return \App\Http\Resources\UserResource
     */
    public function update(User $user, UserUpdateRequest $request)
    {
        if (Auth::user()->can('users-update')) {

            $user = User::find($user);

            $user->update($request->validated());

            if ($request->role) {
                switch ($request->role) {
                    case 'owner':
                        if (!$user->hasAnyRole(['owner'])) {
                            $user->assignRole('owner');
                        }
                        break;

                    case 'user':
                        if ($user->hasAnyRole(['owner'])) {
                            $user->removeRole('owner');
                            $user->assignRole('user');
                        }
                        break;

                    default:
                        break;
                }
            }

            return response()->json([
                'user' => $user,
                'message' => 'User updated successfully',
            ], 200);
        }

        return response()->json([
            'message' => 'You are not authorized to update users',
        ], 403);
    }

    /**
     * Remove the specified user
     *
     * @param  \App\User\id  $user
     * @param  \App\Http\Requests\UserDeleteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy($user, UserDeleteRequest $request)
    {
        if (Auth::user()->can('users-delete')) {

            $user = User::find($user);

            if ($user->isAdmin()) {
                return response()->json([
                    'message' => 'You cannot delete an admin user',
                ], 403);
            }

            $user->delete();
            return response()->json([
                'message' => 'User deleted successfully',
            ], 200);
        }

        return response()->json([
            'message' => 'You are not authorized to delete users',
        ], 403);
    }

    /**
     * Restore the specified user
     *
     * @param  \App\User\id  $user
     * @param  \App\Http\Requests\UserDeleteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function restore($user)
    {
        if (Auth::user()->can('users-delete')) {

            $user = User::find($user);

            $user->restore();

            return response()->json([
                'message' => 'User restored successfully',
            ], 200);
        }

        return response()->json([
            'message' => 'You are not authorized to restore users',
        ], 403);
    }
}
