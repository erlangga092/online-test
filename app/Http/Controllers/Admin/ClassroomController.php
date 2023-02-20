<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassroomController extends Controller
{
    public function index()
    {
        $classrooms = Classroom::when(request()->q, function ($value) {
            return $value->where('title', 'LIKE', '%' . request()->q . '%');
        })->latest()->paginate(10);

        return Inertia::render('Admin/Classroom/index', compact('classrooms'));
    }

    public function create()
    {
        return Inertia::render('Admin/Classroom/Create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string'
        ]);

        Classroom::create(['title' => $request->title]);
        return redirect()->route('admin.classrooms.index');
    }

    public function edit($id)
    {
        $classroom = Classroom::findOrFail($id);
        return Inertia::render('Admin/Classroom/Edit', compact('classroom'));
    }

    public function update(Request $request, Classroom $classroom)
    {
        $this->validate($request, [
            'title' => 'required|string'
        ]);

        $classroom->update(['title' => $request->title]);
        return redirect()->route('admin.classrooms.index');
    }

    public function destroy($id)
    {
        try {
            $classroom = Classroom::findOrFail($id);
            $classroom->delete();
            return redirect()->route('admin.classrooms.index');
        } catch (\Throwable $th) {
            return back()->withErrors($th->getMessage());
        }
    }
}
