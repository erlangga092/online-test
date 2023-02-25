import { AdminWrapper, BackButton, HeaderForm } from "@/components";
import { SwalDelete } from "@/helpers";
import { LayoutAdmin } from "@/layouts";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const TableRowDetail = ({ label, value }) => {
  return (
    <tr>
      <td style={{ width: "30%" }} className="fw-bold">
        {label}
      </td>
      <td>{value}</td>
    </tr>
  );
};

const Show = ({ exam }) => {
  const onDelete = (e, ID) => {
    e.preventDefault();
    SwalDelete({
      title: "Soal",
      link: `/admin/exams/${exam?.id}/questions/${ID}`,
    });
  };

  return (
    <>
      <Head>
        <title>Detail Ujian - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col-md-12">
              <BackButton link="/admin/exams" />
              <div className="card border-0 shadow mb-4">
                <div className="card-body">
                  <HeaderForm title="Detail Ujian" icon="fa fa-edit" />

                  <div className="table-responsive">
                    <table className="table table-bordered table-centered table-nowrap mb-0 rounded">
                      <tbody>
                        <TableRowDetail label="Exam ID" value={exam?.id} />
                        <TableRowDetail
                          label="Nama Ujian"
                          value={exam?.title}
                        />
                        <TableRowDetail
                          label="Mata Pelajaran"
                          value={exam?.lesson?.title}
                        />
                        <TableRowDetail
                          label="Kelas"
                          value={exam?.classroom?.title}
                        />
                        <TableRowDetail
                          label="Jumlah Soal"
                          value={exam?.questions?.data?.length}
                        />
                        <TableRowDetail
                          label="Durasi (menit)"
                          value={exam?.duration}
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow mb-4">
                <div className="card-body">
                  <HeaderForm title="Soal Ujian" icon="fa fa-question-circle" />
                  <Link
                    href={`/admin/exams/${exam?.id}/questions/create`}
                    className="btn btn-md btn-primary border-0 shadow me-2"
                  >
                    <i className="fa fa-plus-circle"></i> Tambah
                  </Link>
                  <Link
                    href={`/admin/exams/${exam?.id}/questions/import`}
                    className="btn btn-md btn-success border-0 shadow me-2 text-white"
                  >
                    <i className="fa fa-file-excel"></i> Import
                  </Link>

                  <div className="table-responsive mt-3">
                    <table className="table table-centered table-bordered table-nowrap mb-0 rounded">
                      <thead className="thead-dark">
                        <tr className="border-0">
                          <th
                            className="border-0 rounded-start"
                            style={{ width: "5%" }}
                          >
                            No.{" "}
                          </th>
                          <th className="border-0">Soal</th>
                          <th
                            className="border-0 rounded-end"
                            style={{ width: "15%" }}
                          >
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {exam?.questions?.data?.map((question, i) => (
                          <tr key={i}>
                            <td className="fw-bold text-center">
                              {++i +
                                (exam?.questions?.current_page - 1) *
                                  exam?.questions?.per_page}
                            </td>
                            <td>
                              <div
                                className="fw-bold"
                                dangerouslySetInnerHTML={{
                                  __html: question?.question,
                                }}
                              ></div>
                              <hr />
                              <ol type="A">
                                <li
                                  className={`${
                                    question?.answer == 1
                                      ? "fw-bold text-success"
                                      : ""
                                  }`}
                                  dangerouslySetInnerHTML={{
                                    __html: question?.option_1,
                                  }}
                                ></li>
                                <li
                                  className={`${
                                    question?.answer == 2
                                      ? "fw-bold text-success"
                                      : ""
                                  }`}
                                  dangerouslySetInnerHTML={{
                                    __html: question?.option_2,
                                  }}
                                ></li>
                                <li
                                  className={`${
                                    question?.answer == 3
                                      ? "fw-bold text-success"
                                      : ""
                                  }`}
                                  dangerouslySetInnerHTML={{
                                    __html: question?.option_3,
                                  }}
                                ></li>
                                <li
                                  className={`${
                                    question?.answer == 4
                                      ? "fw-bold text-success"
                                      : ""
                                  }`}
                                  dangerouslySetInnerHTML={{
                                    __html: question?.option_4,
                                  }}
                                ></li>
                                <li
                                  className={`${
                                    question?.answer == 5
                                      ? "fw-bold text-success"
                                      : ""
                                  }`}
                                  dangerouslySetInnerHTML={{
                                    __html: question?.option_5,
                                  }}
                                ></li>
                              </ol>
                            </td>
                            <div className="text-center">
                              <Link className="btn btn-sm btn-info border-0 shadow me-2">
                                <i className="fa fa-pencil-alt"></i>
                              </Link>
                              <button
                                className="btn btn-sm btn-danger border-0 shadow me-2"
                                type="button"
                                onClick={(e) => onDelete(e, question?.id)}
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                            </div>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AdminWrapper>
      </LayoutAdmin>
    </>
  );
};

export default Show;
