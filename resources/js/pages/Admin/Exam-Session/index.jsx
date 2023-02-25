import { AdminWrapper, FormSearch, TableWrapper } from "@/components";
import { SwalDelete } from "@/helpers";
import { LayoutAdmin } from "@/layouts";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";

const ExamSession = ({ exam_sessions }) => {
  const [q, setQ] = useState(
    "" || new URL(window.document.location).searchParams.get("q")
  );

  const onSearch = (e) => {
    e.preventDefault();
    router.get("/admin/exam_sessions", { q });
  };

  const onDestroy = (e, ID) => {
    e.preventDefault();
    SwalDelete({
      link: `/admin/exam_sessions/${ID}`,
      title: "Ujian",
    });
  };

  console.log(exam_sessions);

  return (
    <>
      <Head>
        <title>Sesi Ujian - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-2 col-12 mb-2">
                  <Link
                    href="/admin/exam_sessions/create"
                    className="btn btn-md btn-primary border-0 shadow w-100"
                    type="button"
                  >
                    <i className="fa fa-plus-circle"></i> Tambah
                  </Link>
                </div>
                <div className="col-md-10 col-12 mb-2">
                  <FormSearch
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    onSearch={onSearch}
                  />
                </div>
              </div>
            </div>
          </div>

          <TableWrapper links={exam_sessions?.links}>
            <thead className="thead-dark">
              <tr className="border-0">
                <th className="border-0 rounded-start" style={{ width: "5%" }}>
                  No.{" "}
                </th>
                <th className="border-0">Ujian</th>
                <th className="border-0">Sesi</th>
                <th className="border-0">Siswa</th>
                <th className="border-0">Mulai</th>
                <th className="border-0">Selesai</th>
                <th className="border-0 rounded-end" style={{ width: "15%" }}>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {exam_sessions?.data?.length ? (
                exam_sessions?.data?.map((exam_session, i) => (
                  <tr key={exam_session?.id}>
                    <td className="fw-bold text-center">
                      {++i +
                        (exam_sessions?.current_page - 1) *
                          exam_sessions?.per_page}
                    </td>
                    <td>
                      <strong>{exam_session?.exam?.title}</strong>
                      <ul className="mt-2">
                        <li>
                          Kelas :{" "}
                          <strong>
                            {exam_session?.exam?.classroom?.title}
                          </strong>
                        </li>
                        <li>
                          Pelajaran :{" "}
                          <strong>{exam_session?.exam?.lesson?.title}</strong>
                        </li>
                      </ul>
                    </td>
                    <td>{exam_session?.title}</td>
                    <td className="text-center">
                      {exam_session?.exam_groups?.length}
                    </td>
                    <td>
                      <p>
                        {new Intl.DateTimeFormat("id", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }).format(new Date(exam_session?.start_time))}
                      </p>
                      <p>
                        Pukul{" "}
                        {new Intl.DateTimeFormat("id", {
                          hour: "numeric",
                          minute: "numeric",
                          timeZoneName: "short",
                        }).format(new Date(exam_session?.start_time))}
                      </p>
                    </td>
                    <td>
                      <p>
                        {new Intl.DateTimeFormat("id", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }).format(new Date(exam_session?.end_time))}
                      </p>
                      <p>
                        Pukul{" "}
                        {new Intl.DateTimeFormat("id", {
                          hour: "numeric",
                          minute: "numeric",
                          timeZoneName: "short",
                        }).format(new Date(exam_session?.end_time))}
                      </p>
                    </td>
                    <td className="text-center">
                      <Link
                        href={`/admin/exam_sessions/${exam_session?.id}`}
                        className="btn btn-sm btn-primary border-0 shadow me-2"
                      >
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                      <Link
                        href={`/admin/exam_sessions/${exam_session?.id}/edit`}
                        className="btn btn-sm btn-info border-0 shadow me-2"
                      >
                        <i className="fa fa-pencil-alt"></i>
                      </Link>
                      <button
                        className="btn btn-sm btn-danger border-0 shadow me-2"
                        type="button"
                        onClick={(e) => onDestroy(e, exam_session.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td scope="col" colSpan={7} className="text-center">
                    No Data Found !
                  </td>
                </tr>
              )}
            </tbody>
          </TableWrapper>
        </AdminWrapper>
      </LayoutAdmin>
    </>
  );
};

export default ExamSession;
