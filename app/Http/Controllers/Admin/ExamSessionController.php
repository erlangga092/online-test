<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Exam;
use App\Models\ExamGroup;
use App\Models\ExamSession;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamSessionController extends Controller
{
    public function index()
    {
        $exam_sessions = ExamSession::when(request()->q, function ($value) {
            return $value->where('title', 'LIKE', '%' . request()->q . '%');
        })
            ->with('exam.classroom', 'exam.lesson', 'exam_groups')
            ->latest()
            ->paginate(10);

        return Inertia::render('Admin/Exam-Session/index', compact('exam_sessions'));
    }

    public function create()
    {
        $exams = Exam::all();
        return Inertia::render('Admin/Exam-Session/Create', compact('exams'));
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'exam_id' => 'required|exists:exams,id',
            'start_time' => 'required',
            'end_time' => 'required'
        ]);

        ExamSession::create([
            'title' => $request->title,
            'exam_id' => $request->exam_id,
            'start_time' => date('Y-m-d H:i:s', strtotime($request->start_time)),
            'end_time' => date('Y-m-d H:i:s', strtotime($request->end_time)),
        ]);

        return redirect()->route('admin.exam_sessions.index');
    }

    public function show($id)
    {
        $exam_session = ExamSession::with('exam.classroom', 'exam.lesson')->findOrFail($id);
        $exam_session->setRelation('exam_groups', $exam_session->exam_groups()->with('student.classroom')->paginate(5));

        return Inertia::render('Admin/Exam-Session/Show', compact('exam_session'));
    }

    public function edit($id)
    {
        $exam_session = ExamSession::findOrFail($id);
        $exams = Exam::all();

        return Inertia::render('Admin/Exam-Session/Edit', compact('exam_session', 'exams'));
    }

    public function update(Request $request, ExamSession $exam_session)
    {
        $this->validate($request, [
            'title' => 'required',
            'exam_id' => 'required|exists:exams,id',
            'start_time' => 'required',
            'end_time' => 'required'
        ]);

        $exam_session->update([
            'title' => $request->title,
            'exam_id' => $request->exam_id,
            'start_time' => date('Y-m-d H:i:s', strtotime($request->start_time)),
            'end_time' => date('Y-m-d H:i:s', strtotime($request->end_time)),
        ]);

        return redirect()->route('admin.exam_sessions.index');
    }

    public function destroy($id)
    {
        try {
            $exam_session = ExamSession::findOrFail($id);
            $exam_session->delete();
            return redirect()->route('admin.exam_sessions.index');
        } catch (\Throwable $th) {
            return back()->withErrors($th->getMessage());
        }
    }

    public function createEnrolle(ExamSession $exam_session)
    {
        $exam = $exam_session->exam;
        $students_enrolled = ExamGroup::where('exam_id', $exam->id)
            ->where('exam_session_id', $exam_session->id)
            ->pluck('student_id')
            ->all();

        $students = Student::with('classroom')
            ->where('classroom_id', $exam->classroom_id)
            ->whereNotIn('id', $students_enrolled)
            ->get();

        return Inertia::render('Admin/Exam-Group/Create', compact('students', 'exam', 'exam_session'));
    }

    public function storeEnrolle(Request $request, ExamSession $exam_session)
    {
        $this->validate($request, [
            'student_id' => 'required'
        ]);

        foreach ($request->student_id as $student_id) {
            $student = Student::findOrFail($student_id);

            ExamGroup::create([
                'exam_id' => $request->exam_id,
                'exam_session_id' => $exam_session->id,
                'student_id' => $student->id
            ]);
        }

        return redirect()->route('admin.exam_sessions.show', $exam_session->id);
    }

    public function destroyEnrolle(ExamSession $exam_session, $id)
    {
        try {
            $exam_group = ExamGroup::findOrFail($id);
            $exam_group->delete();
            return redirect()->route('admin.exam_sessions.show', $exam_session->id);
        } catch (\Throwable $th) {
            return back()->withErrors($th->getMessage());
        }
    }
}
