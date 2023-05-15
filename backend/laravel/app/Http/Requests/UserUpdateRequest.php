<?php

namespace App\Http\Requests;

use App\Traits\LockedAdminUser;
use Laravel\Lumen\Http\Request;

class UserUpdateRequest extends Request
{
    use LockedAdminUser;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
            'password' => ['nullable'],
            'role' => ['required', 'max:50'],
            'photo' => ['nullable', 'image'],
        ];
    }
}
