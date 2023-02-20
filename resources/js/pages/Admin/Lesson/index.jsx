import { AdminWrapper, FormSearch, TableWrapper } from "@/components";
import { SwalDelete } from "@/helpers";
import { LayoutAdmin } from "@/layouts";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";

const Lesson = ({ lessons }) => {
  const [q, setQ] = useState(
    "" || new URL(window.document.location).searchParams.get("q")
  );

  const onSearch = (e) => {
    e.preventDefault();
    router.get("/admin/lessons", { q });
  };

  const onDestroy = (e, ID) => {
    e.preventDefault();
    SwalDelete({
      link: `/admin/lessons/${ID}`,
      title: "Mata Pelajaran",
    });
  };

  return (
    <>
      <Head>
        <title>Mata Pelajaran - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-2 col-12 mb-2">
                  <Link
                    href="/admin/lessons/create"
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

          <TableWrapper links={lessons?.links}>
            <thead className="thead-dark">
              <tr className="border-0">
                <th className="border-0 rounded-start" style={{ width: "5%" }}>
                  No.{" "}
                </th>
                <th className="border-0">Mata Pelajaran</th>
                <th className="border-0 rounded-end" style={{ width: "15%" }}>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {lessons?.data?.map((lesson, i) => (
                <tr key={lesson?.id}>
                  <td>
                    {++i + (lessons?.current_page - 1) * lessons?.per_page}
                  </td>
                  <td>{lesson?.title}</td>
                  <td className="text-center">
                    <Link
                      href={`/admin/lessons/${lesson?.id}/edit`}
                      className="btn btn-sm btn-info border-0 shadow me-2"
                    >
                      <i className="fa fa-pencil-alt"></i>
                    </Link>
                    <button
                      className="btn btn-sm btn-danger border-0 shadow me-2"
                      type="button"
                      onClick={(e) => onDestroy(e, lesson.id)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
        </AdminWrapper>
      </LayoutAdmin>
    </>
  );
};

export default Lesson;
