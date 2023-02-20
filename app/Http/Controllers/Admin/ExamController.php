<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use App\Models\Exam;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function index()
    {
        $exams = Exam::when(request()->q, function ($value) {
            return $value->where('title', 'LIKE', '%' . request()->q . '%');
        })->with('lesson', 'classroom', 'questions')->latest()->paginate(10);

        return Inertia::render('Admin/Exam/index', compact('exams'));
    }

    public function create()
    {
        $lessons = Lesson::all();
        $classrooms = Classroom::all();

        return Inertia::render('Admin/Exam/Create', compact('lessons', 'classrooms'));
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string',
            'lesson_id' => 'required|integer|exists:lessons,id',
            'classroom_id' => 'required|integer|exists:classrooms,id',
            'duration' => 'required|integer',
            'description' => 'required|string',
            'random_question' => 'required',
            'random_answer' => 'required',
            'show_answer' => 'required'
        ]);

        Exam::create([
            'title' => $request->title,
            'lesson_id' => $request->lesson_id,
            'classroom_id' => $request->classroom_id,
            'duration' => $request->duration,
            'description' => $request->description,
            'random_question' => $request->random_question,
            'random_answer' => $request->random_answer,
            'show_answer' => $request->show_answer,
        ]);

        return redirect()->route('admin.students.index');
    }

    public function edit($id)
    {
        $exam = Exam::findOrFail($id);
        $lessons = Lesson::all();
        $classrooms = Classroom::all();

        return Inertia::render('Admin/Exam/Edit', compact('exam', 'lessons', 'classrooms'));
    }

    public function update(Request $request, Exam $exam)
    {
        $this->validate($request, [
            'title' => 'required|string',
            'lesson_id' => 'required|integer|exists:lessons,id',
            'classroom_id' => 'required|integer|exists:classrooms,id',
            'duration' => 'required|integer',
            'description' => 'required|string',
            'random_question' => 'required',
            'random_answer' => 'required',
            'show_answer' => 'required'
        ]);

        $exam->update([
            'title' => $request->title,
            'lesson_id' => $request->lesson_id,
            'classroom_id' => $request->classroom_id,
            'duration' => $request->duration,
            'description' => $request->description,
            'random_question' => $request->random_question,
            'random_answer' => $request->random_answer,
            'show_answer' => $request->show_answer,
        ]);

        return redirect()->route('admin.exams.index');
    }

    public function destroy($id)
    {
        try {
            $exam = Exam::findOrFail($id);
            $exam->delete();
            return redirect()->route('admin.exams.index');
        } catch (\Throwable $th) {
            return back()->withErrors($th->getMessage());
        }
    }
}
