import {
  AdminWrapper,
  BackButton,
  FormInput,
  HeaderForm,
  ResetButton,
  SubmitButton,
} from "@/components";
import { SwalUpdate } from "@/helpers";
import { LayoutAdmin } from "@/layouts";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const Edit = ({ errors, classroom }) => {
  const [form, setForm] = useState({
    title: classroom?.title,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    SwalUpdate({
      link: `/admin/classrooms/${classroom?.id}`,
      title: "Kelas",
      form: form,
    });
  };

  return (
    <>
      <Head>
        <title>Edit Pelajaran - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col md-12">
              <BackButton link="/admin/classrooms" />
              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm title="Edit Kelas" />

                  <form onSubmit={onSubmit}>
                    <FormInput
                      label="Nama Kelas"
                      name="title"
                      value={form?.title}
                      placeholder="Masukkan Nama Kelas"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          title: e?.target?.value,
                        })
                      }
                      isError={errors?.title}
                    ></FormInput>

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
