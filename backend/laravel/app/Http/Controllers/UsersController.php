<?php

namespace App\Http\Controllers;

use App\Resources\UserCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class UsersController extends Controller
{
    public function index()
    {

        if (Auth::user()->can('users-list')) {
            return response()->json([
                'users' => new UserCollection(
                    Auth::user()->account->users()
                        ->orderByName()
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
