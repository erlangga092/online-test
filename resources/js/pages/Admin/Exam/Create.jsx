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
