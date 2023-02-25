<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Exam;
use App\Models\ExamSession;
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
}
