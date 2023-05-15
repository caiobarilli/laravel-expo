<?php

namespace App\Http\Requests;

use App\Traits\LockedAdminUser;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
            'email' => [
                'required', 'max:50', 'email',
                Rule::unique('users')->ignore($this->route('user')->id)
            ],
            'password' => ['nullable'],
            'role' => ['required', 'max:50'],
            'photo' => ['nullable', 'image'],
        ];
    }
}
