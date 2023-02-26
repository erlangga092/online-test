import {
  AdminWrapper,
  BackButton,
  HeaderForm,
  ResetButton,
  SubmitButton,
} from "@/components";
import { LayoutAdmin } from "@/layouts";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";

const Create = ({ errors, exam, exam_session, students }) => {
  const [form, setForm] = useState({
    exam_id: exam?.id,
    exam_session_id: exam_session?.id,
    student_id: [],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    router.post(`/admin/exam_sessions/${exam_session?.id}/enrolle/store`, form);
  };

  const onCheck = (e) => {
    setForm({
      ...form,
      student_id:
        [...form.student_id].indexOf(e.target.value) < 0
          ? [...form.student_id, e.target.value]
          : [...form.student_id.filter((v) => v != e.target.value)],
    });
  };

  const onCheckAll = (e) => {
    if (e.target.checked) {
      const allStudentID = students.map((v) => v.id);
      setForm(() => {
        const enrolleNode = window.document.querySelectorAll(".check-enrolle");

        for (const node of enrolleNode) {
          node.checked = true;
        }

        return {
          ...form,
          student_id: allStudentID,
        };
      });
    } else {
      setForm(() => {
        const enrolleNode = window.document.querySelectorAll(".check-enrolle");

        for (const node of enrolleNode) {
          node.checked = false;
        }

        return {
          ...form,
          student_id: [],
        };
      });
    }
  };

  return (
    <>
      <Head>
        <title>Enrolle Siswa - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col md-12">
              <BackButton link={`/admin/exam_sessions/${exam_session?.id}`} />
              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm title="Enrolle Siswa" icon="fa fa-user-plus" />

                  <form onSubmit={onSubmit}>
                    <div className="table-responsive mb-4">
                      <table className="table table-bordered table-centered table-nowrap mb-0 rounded">
                        <thead className="thead-dark">
                          <tr className="border-0">
                            <th
                              className="border-0 rounded-start"
                              style={{ width: "5%" }}
                            >
                              <input
                                type="checkbox"
                                className="form-check-input check-enrolle"
                                onChange={(e) => onCheckAll(e)}
                              />
                            </th>
                            <th className="border-0">Nama Siswa</th>
                            <th className="border-0">Kelas</th>
                            <th className="border-0 rounded-end">
                              Jenis Kelamin
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {students?.length ? (
                            students?.map((student) => (
                              <tr>
                                <td>
                                  <input
                                    type="checkbox"
                                    className="form-check-input check-enrolle"
                                    value={student?.id}
                                    onChange={(e) => onCheck(e)}
                                  />
                                </td>
                                <td>{student?.name}</td>
                                <td>{student?.classroom?.title}</td>
                                <td>{student?.gender}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={4} className="text-center">
                                <strong>No Data Found !</strong>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      {errors?.student_id && (
                        <div className="alert alert-danger mt-2">
                          {errors?.student_id}
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

export default Create;
