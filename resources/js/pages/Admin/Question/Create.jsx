import {
  AdminWrapper,
  BackButton,
  HeaderForm,
  ResetButton,
  SubmitButton,
} from "@/components";
import { LayoutAdmin } from "@/layouts";
import { Head, router } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";

const BoxEditor = ({ title, onEditorChange, isError }) => {
  return (
    <tr>
      <td
        style={{
          width: "20%",
        }}
        className="fw-bold"
      >
        {title}
      </td>
      <td>
        <Editor
          apiKey="no-api-key"
          init={{
            height: 130,
            menubar: false,
            plugins: ["lists link image emoticons"],
            toolbar:
              "undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons",
            content_style:
              "body { font-family: Quicksand, Helvetica, Arial, sans-serif; font-size: 16px }",
          }}
          onEditorChange={onEditorChange}
        />

        {isError && <div className="alert alert-danger mt-3">{isError}</div>}
      </td>
    </tr>
  );
};

const Create = ({ errors, exam }) => {
  const [form, setForm] = useState({
    question: "",
    option_1: "",
    option_2: "",
    option_3: "",
    option_4: "",
    option_5: "",
    answer: 1,
  });

  const answerOption = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    router.post(`/admin/exams/${exam?.id}/questions`, form);
  };

  return (
    <>
      <Head>
        <title>Tambah Soal - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col md-12">
              <BackButton link={`/admin/exams/${exam?.id}`} />
              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm
                    title="Tambah Soal"
                    icon="fa fa-question-circle"
                  />

                  <form onSubmit={onSubmit}>
                    <div className="table-responsive mb-4">
                      <table className="table table-bordered table-centered table-nowrap mb-0 rounded">
                        <tbody>
                          <BoxEditor
                            title="Soal"
                            onEditorChange={(ev, editor) =>
                              setForm({
                                ...form,
                                question: editor.getContent({
                                  format: "text",
                                }),
                              })
                            }
                            isError={errors?.question}
                          />
                          <BoxEditor
                            title="Pilihan A"
                            onEditorChange={(ev, editor) =>
                              setForm({
                                ...form,
                                option_1: editor.getContent({
                                  format: "text",
                                }),
                              })
                            }
                            isError={errors?.option_1}
                          />
                          <BoxEditor
                            title="Pilihan B"
                            onEditorChange={(ev, editor) =>
                              setForm({
                                ...form,
                                option_2: editor.getContent({
                                  format: "text",
                                }),
                              })
                            }
                            isError={errors?.option_2}
                          />
                          <BoxEditor
                            title="Pilihan C"
                            onEditorChange={(ev, editor) =>
                              setForm({
                                ...form,
                                option_3: editor.getContent({
                                  format: "text",
                                }),
                              })
                            }
                            isError={errors?.option_3}
                          />
                          <BoxEditor
                            title="Pilihan D"
                            onEditorChange={(ev, editor) =>
                              setForm({
                                ...form,
                                option_4: editor.getContent({
                                  format: "text",
                                }),
                              })
                            }
                            isError={errors?.option_4}
                          />
                          <BoxEditor
                            title="Pilihan E"
                            onEditorChange={(ev, editor) =>
                              setForm({
                                ...form,
                                option_5: editor.getContent({
                                  format: "text",
                                }),
                              })
                            }
                            isError={errors?.option_5}
                          />
                          <tr>
                            <td style={{ width: "20%" }} className="fw-bold">
                              Jawaban Benar
                            </td>
                            <td>
                              <select
                                className="form-select"
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    answer: e.target.value,
                                  })
                                }
                              >
                                {answerOption?.map((answer, i) => (
                                  <option
                                    value={answer?.id}
                                    key={i}
                                    selected={form?.answer == answer?.id}
                                  >
                                    {answer?.name}
                                  </option>
                                ))}
                              </select>

                              {errors?.answer && (
                                <div className="alert alert-danger mt-2">
                                  {errors?.answer}
                                </div>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
