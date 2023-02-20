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
import { SwalUpdate } from "@/helpers";

const Edit = ({ errors, student, classrooms }) => {
  const [form, setForm] = useState({
    classroom_id: student?.classroom_id,
    nisn: student?.nisn,
    name: student?.name,
    gender: student?.gender,
    password: "",
    password_confirmation: "",
  });

  const gender = [
    { id: "L", name: "Laki-laki", value: "L" },
    { id: "P", name: "Perempuan", value: "P" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    SwalUpdate({
      link: `/admin/students/${student?.id}`,
      title: "Siswa",
      form,
    });
  };

  return (
    <>
      <Head>
        <title>Edit Siswa - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col md-12">
              <BackButton link="/admin/students" />
              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm title="Edit Siswa" icon="fa fa-user" />

                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <FormInput
                          label="Nisn"
                          name="nisn"
                          value={form?.nisn}
                          placeholder="Masukkan Nisn Siswa"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              nisn: e?.target?.value,
                            })
                          }
                          isError={errors?.nisn}
                        ></FormInput>
                      </div>
                      <div className="col-md-6">
                        <FormInput
                          label="Nama Lengkap"
                          name="name"
                          value={form?.name}
                          placeholder="Masukkan Nama Lengkap Siswa"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              name: e?.target?.value,
                            })
                          }
                          isError={errors?.name}
                        ></FormInput>
                      </div>
                    </div>

                    <div className="row">
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
                      <div className="col-md-6">
                        <FormSelect
                          label="Gender"
                          name="gender"
                          value={form?.gender}
                          data={gender}
                          keyVal="name"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              gender: e?.target?.value,
                            })
                          }
                          isError={errors?.gender}
                        ></FormSelect>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <FormInput
                          label="Password"
                          name="password"
                          type="password"
                          value={form?.password}
                          placeholder="Masukkan Password"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              password: e?.target?.value,
                            })
                          }
                          isError={errors?.password}
                        ></FormInput>
                      </div>
                      <div className="col-md-6">
                        <FormInput
                          label="Konfirmasi Password"
                          name="password_confirmation"
                          type="password"
                          value={form?.password_confirmation}
                          placeholder="Masukkan Konfirmasi Password"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              password_confirmation: e?.target?.value,
                            })
                          }
                          isError={errors?.password_confirmation}
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

export default Edit;
