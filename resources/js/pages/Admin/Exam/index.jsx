import { AdminWrapper, FormSearch, TableWrapper } from "@/components";
import { SwalDelete } from "@/helpers";
import { LayoutAdmin } from "@/layouts";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";

const Exam = ({ exams }) => {
  const [q, setQ] = useState(
    "" || new URL(window.document.location).searchParams.get("q")
  );

  const onSearch = (e) => {
    e.preventDefault();
    router.get("/admin/exams", { q });
  };

  const onDestroy = (e, ID) => {
    e.preventDefault();
    SwalDelete({
      link: `/admin/exams/${ID}`,
      title: "Ujian",
    });
  };

  return (
    <>
      <Head>
        <title>Ujian - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-2 col-12 mb-2">
                  <Link
                    href="/admin/exams/create"
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

          <TableWrapper links={exams?.links}>
            <thead className="thead-dark">
              <tr className="border-0">
                <th className="border-0 rounded-start" style={{ width: "5%" }}>
                  No.{" "}
                </th>
                <th className="border-0">Ujian</th>
                <th className="border-0">Pelajaran</th>
                <th className="border-0">Kelas</th>
                <th className="border-0">Jumlah Soal</th>
                <th className="border-0 rounded-end" style={{ width: "15%" }}>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {exams?.data?.length ? (
                exams?.data?.map((exam, i) => (
                  <tr key={exam?.id}>
                    <td>{++i + (exams?.current_page - 1) * exams?.per_page}</td>
                    <td>{exam?.title}</td>
                    <td>{exam?.lesson?.title}</td>
                    <td>{exam?.classroom?.title}</td>
                    <td>{exam?.questions?.length}</td>
                    <td className="text-center">
                      <Link
                        href={`/admin/exams/${exam?.id}`}
                        className="btn btn-sm btn-primary border-0 shadow me-2"
                      >
                        <i className="fa fa-plus-circle"></i>
                      </Link>
                      <Link
                        href={`/admin/exams/${exam?.id}/edit`}
                        className="btn btn-sm btn-info border-0 shadow me-2"
                      >
                        <i className="fa fa-pencil-alt"></i>
                      </Link>
                      <button
                        className="btn btn-sm btn-danger border-0 shadow me-2"
                        type="button"
                        onClick={(e) => onDestroy(e, exam.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td scope="col" colSpan={6} className="text-center">
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

export default Exam;
