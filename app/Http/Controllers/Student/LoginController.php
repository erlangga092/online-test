<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $this->validate($request, [
            'nisn' => 'required',
            'password' => 'required'
        ]);

        $student = Student::where([
            'nisn' => $request->nisn,
            'password' => $request->password
        ])->first();

        if (!$student) {
            return redirect()->back()->with('error', 'NISN atau Password salah !');
        }

        auth()->guard('student')->login($student);
        return redirect()->route('student.dashboard');
    }
}
