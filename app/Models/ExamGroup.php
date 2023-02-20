<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamGroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id', 'exam_session_id', 'student_id'
    ];
}
