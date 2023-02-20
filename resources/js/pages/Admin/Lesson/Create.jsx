import {
  AdminWrapper,
  BackButton,
  FormInput,
  HeaderForm,
  ResetButton,
  SubmitButton,
} from "@/components";
import { LayoutAdmin } from "@/layouts";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";

const Create = ({ errors }) => {
  const [form, setForm] = useState({
    title: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    router.post("/admin/lessons", form);
  };

  return (
    <>
      <Head>
        <title>Tambah Pelajaran - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col md-12">
              <BackButton link="/admin/lessons" />
              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm title="Tambah Pelajaran" />

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

export default Create;
