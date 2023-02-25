import {
  AdminWrapper,
  BackButton,
  FormInput,
  FormSelect,
  HeaderForm,
  ResetButton,
  SubmitButton,
} from "@/components";
import { LayoutAdmin } from "@/layouts";
import { Head, router } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";

const Create = ({ errors, classrooms, lessons }) => {
  const [form, setForm] = useState({
    title: "",
    lesson_id: lessons[0]?.id,
    classroom_id: classrooms[0]?.id,
    duration: 0,
    description: "",
    random_question: "Y",
    random_answer: "Y",
    show_answer: "N",
  });

  const enumBool = [
    { id: "Y", name: "Y" },
    { id: "N", name: "N" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    router.post("/admin/exams", form);
  };

  return (
    <>
      <Head>
        <title>Tambah Ujian - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col md-12">
              <BackButton link="/admin/exams" />
              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm title="Tambah Ujian" icon="fa fa-edit" />

                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <FormInput
                        label="Nama Ujian"
                        name="title"
                        value={form?.title}
                        placeholder="Masukkan Nama Ujian"
                        onChange={(e) =>
                          setForm({
                            ...form,
                            title: e?.target?.value,
                          })
                        }
                        isError={errors?.title}
                      ></FormInput>
                    </div>

                    <div className="row">
                      <div className="mb-4">
                        <label htmlFor="description">Deskripsi</label>
                        <Editor
                          apiKey="no-api-key"
                          init={{
                            height: 500,
                            menubar: false,
                            plugins: ["lists link image emoticons"],
                            toolbar:
                              "undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons",
                            content_style:
                              "body { font-family: Quicksand, Helvetica, Arial, sans-serif; font-size: 16px }",
                          }}
                          onEditorChange={(ev, editor) =>
                            setForm({
                              ...form,
                              description: editor.getContent({
                                format: "text",
                              }),
                            })
                          }
                        />

                        {errors?.description && (
                          <div className="alert alert-danger mt-2">
                            {errors?.description}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <FormSelect
                          label="Mata Pelajaran"
                          name="lesson_id"
                          value={form?.lesson_id}
                          data={lessons}
                          keyVal="title"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              lesson_id: e?.target?.value,
                            })
                          }
                          isError={errors?.lesson_id}
                        ></FormSelect>
                      </div>
                      <div className="col-md-6">
                        <FormSelect
                          label="Kelas"
                          name="classroom_id"
                          value={form?.classroom_id}
                          data={classrooms}
                          keyVal="title"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              classroom_id: e?.target?.value,
                            })
                          }
                          isError={errors?.classroom_id}
                        ></FormSelect>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <FormSelect
                          label="Acak Pertanyaan"
                          name="random_question"
                          value={form?.random_question}
                          data={enumBool}
                          keyVal="name"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              random_question: e?.target?.value,
                            })
                          }
                          isError={errors?.random_question}
                        ></FormSelect>
                      </div>
                      <div className="col-md-6">
                        <FormSelect
                          label="Acak Jawaban"
                          name="random_answer"
                          value={form?.random_answer}
                          data={enumBool}
                          keyVal="name"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              random_answer: e?.target?.value,
                            })
                          }
                          isError={errors?.random_answer}
                        ></FormSelect>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <FormSelect
                          label="Tampilkan Hasil"
                          name="random_answer"
                          value={form?.random_answer}
                          data={enumBool}
                          keyVal="name"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              random_answer: e?.target?.value,
                            })
                          }
                          isError={errors?.random_answer}
                        ></FormSelect>
                      </div>
                      <div className="col-md-6">
                        <FormInput
                          label="Durasi"
                          type="number"
                          name="duration"
                          value={form?.duration}
                          placeholder="Masukkan Durasi"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              duration: e?.target?.value,
                            })
                          }
                          isError={errors?.duration}
                        ></FormInput>
                      </div>
                    </div>

                    <>
                      <SubmitButton />
                      <ResetButton />
                    </>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </AdminWrapper>
      </LayoutAdmin>
    </>
  );
};

export default Create;
