<?php

namespace App\Traits;

use Illuminate\Validation\ValidationException;

trait LockedAdminUser
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !$this->route('user')->isAdmin();
    }

    /**
     * Handle a failed authorization attempt.
     *
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function failedAuthorization()
    {
        throw ValidationException::withMessages([
            'message' => 'You are not authorized to update this user',
        ]);
    }
}
