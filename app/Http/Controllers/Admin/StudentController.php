<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::when(request()->q, function ($value) {
            return $value->where('name', 'LIKE', '%' . request()->q . '%');
        })->with('classroom')->latest()->paginate(10);

        return Inertia::render('Admin/Student/index', compact('students'));
    }

    public function create()
    {
        $classrooms = Classroom::all();

        return Inertia::render('Admin/Student/Create', compact('classrooms'));
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'classroom_id' => 'required|exists:classrooms,id',
            'nisn' => 'required|unique:students,id',
            'name' => 'required|string',
            'gender' => 'required|string',
            'password' => 'required|confirmed',
        ]);

        Student::create([
            'classroom_id' => $request->classroom_id,
            'nisn' => $request->nisn,
            'name' => $request->name,
            'gender' => $request->gender,
            'password' => $request->password,
        ]);

        return redirect()->route('admin.students.index');
    }

    public function edit($id)
    {
        $student = Student::findOrFail($id);
        $classrooms = Classroom::all();

        return Inertia::render('Admin/Student/Edit', compact('student', 'classrooms'));
    }

    public function update(Request $request, Student $student)
    {
        $this->validate($request, [
            'classroom_id' => 'required|exists:classrooms,id',
            'nisn' => 'required|unique:students,nisn,' . $student->id,
            'name' => 'required|string',
            'gender' => 'required|string',
            'password' => 'required|confirmed',
        ]);

        $student->update([
            'classroom_id' => $request->classroom_id,
            'nisn' => $request->nisn,
            'name' => $request->name,
            'gender' => $request->gender,
            'password' => $request->password,
        ]);

        return redirect()->route('admin.students.index');
    }

    public function destroy($id)
    {
        try {
            $student = Student::findOrFail($id);
            $student->delete();
            return redirect()->route('admin.students.index');
        } catch (\Throwable $th) {
            return back()->withErrors($th->getMessage());
        }
    }
}
