<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LessonController extends Controller
{
    public function index()
    {
        $lessons = Lesson::when(request()->q, function ($value) {
            return $value->where('title', 'LIKE', '%' . request()->q . '%');
        })->latest()->paginate(10);

        return Inertia::render('Admin/Lesson/index', compact('lessons'));
    }

    public function show($id)
    {
    }

    public function create()
    {
        return Inertia::render('Admin/Lesson/Create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string'
        ]);

        Lesson::create(['title' => $request->title]);
        return redirect()->route('admin.lessons.index');
    }

    public function edit($id)
    {
        $lesson = Lesson::findOrFail($id);
        return Inertia::render('Admin/Lesson/Edit', compact('lesson'));
    }

    public function update(Request $request, Lesson $lesson)
    {
        $this->validate($request, [
            'title' => 'required|string'
        ]);

        $lesson->update(['title' => $request->title]);
        return redirect()->route('admin.lessons.index');
    }

    public function destroy($id)
    {
        try {
            $lesson = Lesson::findOrFail($id);
            $lesson->delete();
            return redirect()->route('admin.lessons.index');
        } catch (\Throwable $th) {
            return back()->withErrors($th->getMessage());
        }
    }
}
