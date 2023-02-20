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

const Edit = ({ errors, lesson }) => {
  const [form, setForm] = useState({
    title: lesson?.title,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    SwalUpdate({
      link: `/admin/lessons/${lesson?.id}`,
      title: "Mata Pelajaran",
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
              <BackButton link="/admin/lessons" />
              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm title="Edit Pelajaran" />

                  <form onSubmit={onSubmit}>
                    <FormInput
                      label="Nama Pelajaran"
                      name="title"
                      value={form?.title}
                      placeholder="Masukkan Nama Pelajaran"
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
