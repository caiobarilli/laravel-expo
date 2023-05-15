<?php

namespace App\Http\Controllers;

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
}
