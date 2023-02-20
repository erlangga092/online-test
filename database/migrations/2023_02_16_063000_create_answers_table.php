<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('exam_id')->references('id')->on('exams')->restrictOnDelete();
            $table->foreignId('exam_session_id')->references('id')->on('exam_sessions')->restrictOnDelete();
            $table->foreignId('question_id')->references('id')->on('questions')->restrictOnDelete();
            $table->foreignId('student_id')->references('id')->on('students')->restrictOnDelete();
            $table->integer('question_order');
            $table->string('answer_order');
            $table->integer('answer');
            $table->enum('is_correct', ['Y', 'N'])->default('N');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('answers');
    }
};
