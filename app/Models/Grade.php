<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id', 'exam_session_id', 'student_id', 'duration', 'start_time', 'end_time', 'total_correct', 'grade'
    ];
}
