import {
  AdminWrapper,
  BackButton,
  HeaderForm,
  ResetButton,
  SubmitButton,
} from "@/components";
import { SwalImport } from "@/helpers";
import { LayoutAdmin } from "@/layouts";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const Import = ({ errors, exam }) => {
  const [form, setForm] = useState({
    file: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    SwalImport({
      title: "Soal Ujian",
      link: `/admin/exams/${exam?.id}/questions/import`,
      form,
    });
  };

  return (
    <>
      <Head>
        <title>Import Soal - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col md-12">
              <BackButton link={`/admin/exams/${exam?.id}`} />
              <a
                href=""
                className="btn btn-md btn-success text-white border-0 shadow mb-3"
                type="button"
              >
                <i className="fa fa-file-excel me-2"></i> Contoh Format
              </a>
              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm
                    title="Import Soal"
                    icon="fa fa-question-circle"
                  />

                  <form onSubmit={onSubmit}>
                    <div className="mb-4">
                      <label htmlFor="file">File Excel</label>
                      <input
                        type="file"
                        name="file"
                        className="form-control"
                        required
                        onInput={(e) =>
                          setForm({
                            ...form,
                            file: e.target.files[0],
                          })
                        }
                      />
                      {errors?.file && (
                        <div className="alert alert-danger mt-2">
                          {errors?.file}
                        </div>
                      )}
                      {errors[0] && (
                        <div className="alert alert-danger mt-2">
                          {errors[0]}
                        </div>
                      )}
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

export default Import;
