import {
  AdminWrapper,
  BackButton,
  FormInput,
  FormSelect,
  HeaderForm,
  ResetButton,
  SubmitButton,
} from "@/components";
import { SwalUpdate } from "@/helpers";
import { LayoutAdmin } from "@/layouts";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Edit = ({ errors, exam_session, exams }) => {
  const [form, setForm] = useState({
    title: exam_session?.title,
    exam_id: exam_session?.exam_id,
    start_time: new Date(exam_session?.start_time),
    end_time: new Date(exam_session?.end_time),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    SwalUpdate({
      title: "Sesi Ujian",
      link: `/admin/exam_sessions/${exam_session?.id}`,
      form,
    });
  };

  return (
    <>
      <Head>
        <title>Edit Sesi Ujian - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col md-12">
              <BackButton link="/admin/exam_sessions" />
              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm title="Edit Sesi Ujian" icon="fa fa-stopwatch" />

                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <FormInput
                          label="Nama Sesi Ujian"
                          name="title"
                          value={form?.title}
                          placeholder="Masukkan Nama Sesi Ujian"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              title: e?.target?.value,
                            })
                          }
                          isError={errors?.title}
                        ></FormInput>
                      </div>
                      <div className="col-md-6">
                        <FormSelect
                          name="exam_id"
                          label="Ujian"
                          data={exams}
                          keyVal="title"
                          value={form?.exam_id}
                          isError={errors?.exam_id}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              exam_id: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label htmlFor="start_time">Waktu Mulai</label>
                          <DatePicker
                            className="form-select"
                            selected={form?.start_time}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MM/dd/yyyy H:mm"
                            onChange={(date) =>
                              setForm({
                                ...form,
                                start_time: date,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label htmlFor="start_time">Waktu Selesai</label>
                          <DatePicker
                            className="form-select"
                            selected={form?.end_time}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MM/dd/yyyy H:mm"
                            onChange={(date) =>
                              setForm({
                                ...form,
                                end_time: date,
                              })
                            }
                          />
                        </div>
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
