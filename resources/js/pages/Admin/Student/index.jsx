import { AdminWrapper, FormSearch, TableWrapper } from "@/components";
import { SwalDelete } from "@/helpers";
import { LayoutAdmin } from "@/layouts";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";

const Student = ({ students }) => {
  const [q, setQ] = useState(
    "" || new URL(window.document.location).searchParams.get("q")
  );

  const onSearch = (e) => {
    e.preventDefault();
    router.get("/admin/students", { q });
  };

  const onDestroy = (e, ID) => {
    e.preventDefault();
    SwalDelete({
      link: `/admin/students/${ID}`,
      title: "Siswa",
    });
  };

  return (
    <>
      <Head>
        <title>Siswa - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-2 col-12 mb-2">
                  <Link
                    href="/admin/students/create"
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

          <TableWrapper links={students?.links}>
            <thead className="thead-dark">
              <tr className="border-0">
                <th className="border-0 rounded-start" style={{ width: "5%" }}>
                  No.{" "}
                </th>
                <th className="border-0">NISN</th>
                <th className="border-0">Nama</th>
                <th className="border-0">Kelas</th>
                <th className="border-0">Jenis Kelamin</th>
                <th className="border-0">Password</th>
                <th className="border-0 rounded-end" style={{ width: "15%" }}>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {students?.data?.length ? (
                students?.data?.map((student, i) => (
                  <tr key={student?.id}>
                    <td>
                      {++i + (students?.current_page - 1) * students?.per_page}
                    </td>
                    <td>{student?.nisn}</td>
                    <td>{student?.name}</td>
                    <td>{student?.classroom?.title}</td>
                    <td>{student?.gender}</td>
                    <td>{student?.password}</td>
                    <td className="text-center">
                      <Link
                        href={`/admin/students/${student?.id}/edit`}
                        className="btn btn-sm btn-info border-0 shadow me-2"
                      >
                        <i className="fa fa-pencil-alt"></i>
                      </Link>
                      <button
                        className="btn btn-sm btn-danger border-0 shadow me-2"
                        type="button"
                        onClick={(e) => onDestroy(e, student.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td scope="col" colSpan={4} className="text-center">
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

export default Student;
