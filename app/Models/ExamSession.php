<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id', 'title', 'start_time', 'end_time'
    ];

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }

    public function exam_groups()
    {
        return $this->hasMany(ExamGroup::class);
    }

    protected function startTime(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => \Carbon\Carbon::create($value)->isoFormat('LLLL')
        );
    }

    protected function endTime(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => \Carbon\Carbon::create($value)->isoFormat('LLLL'),
        );
    }
}
