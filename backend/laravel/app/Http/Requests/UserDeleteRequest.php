<?php

namespace App\Http\Requests;

use App\Traits\LockedAdminUser;
use Laravel\Lumen\Http\Request;

class UserDeleteRequest extends Request
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
            //
        ];
    }
}
