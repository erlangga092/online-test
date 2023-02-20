<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use App\Models\Exam;
use App\Models\ExamSession;
use App\Models\Lesson;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $students = Student::count();
        $exams = Exam::count();
        $exam_sessions = ExamSession::count();
        $classrooms = Classroom::count();
        $lessons = Lesson::count();

        return Inertia::render("Admin/Dashboard/index", [
            'students' => $students,
            'exams' => $exams,
            'exam_sessions' => $exam_sessions,
            'classrooms' => $classrooms,
            'lessons' => $lessons,
        ]);
    }
}
