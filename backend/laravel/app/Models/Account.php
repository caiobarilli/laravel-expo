<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use Uuids;

    protected $fillable = ['name'];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
