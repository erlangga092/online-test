import { AdminWrapper, BackButton, HeaderForm, Pagination } from "@/components";
import { LayoutAdmin } from "@/layouts";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { SwalDelete } from "@/helpers";

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

const AddLink = ({ link, label, icon }) => {
  return (
    <Link
      href={link}
      class="btn btn-md btn-primary border-0 shadow me-2"
      type="button"
    >
      <i class={icon}></i> {label}
    </Link>
  );
};

function formatDateTime(v) {
  return new Intl.DateTimeFormat("id", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  }).format(new Date(v));
}

const Show = ({ exam_session }) => {
  const onDestroy = (e, ID) => {
    e.preventDefault();
    SwalDelete({
      title: "Siswa",
      link: `/admin/exam_sessions/${exam_session?.id}/enrolle/${ID}/destroy`,
    });
  };

  return (
    <>
      <Head>
        <title>Detail Sesi Ujian - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <AdminWrapper>
          <div className="row">
            <div className="col-md-12">
              <BackButton link={`/admin/exam_sessions`} />

              <div className="card border-0 shadow mb-4">
                <div className="card-body">
                  <HeaderForm
                    title="Detail Sesi Ujian"
                    icon="fa fa-stopwatch"
                  />

                  <div className="table-responsive">
                    <table className="table table-bordered table-centered table-nowrap mb-0 rounded">
                      <tbody>
                        <TableRowDetail
                          label="Nama Ujian"
                          value={exam_session?.exam?.title}
                        />
                        <TableRowDetail
                          label="Mata Pelajaran"
                          value={exam_session?.exam?.lesson?.title}
                        />
                        <TableRowDetail
                          label="Kelas"
                          value={exam_session?.exam?.classroom?.title}
                        />
                        <TableRowDetail
                          label="Sesi"
                          value={exam_session?.title}
                        />
                        <TableRowDetail
                          label="Mulai"
                          value={formatDateTime(exam_session?.start_time)}
                        />
                        <TableRowDetail
                          label="Selesai"
                          value={formatDateTime(exam_session?.end_time)}
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow">
                <div className="card-body">
                  <HeaderForm title="Enrolled Siswa" icon="fa fa-user-plus" />
                  <AddLink
                    icon="fa fa-user-plus"
                    label="Enrolle Siswa"
                    link={`/admin/exam_sessions/${exam_session?.id}/enrolle/create`}
                  />

                  <div className="table-responsive mt-3">
                    <table className="table table-bordered table-centered table-nowrap mb-0 rounded">
                      <thead className="thead-dark">
                        <tr className="border-0">
                          <th
                            className="border-0 rounded-start"
                            style={{ width: "5%" }}
                          >
                            No.
                          </th>
                          <th className="border-0">Nama Siswa</th>
                          <th className="border-0">Kelas</th>
                          <th className="border-0">Jenis Kelamin</th>
                          <th
                            className="border-0 rounded-end"
                            style={{ width: "15%" }}
                          >
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {exam_session?.exam_groups?.data?.length ? (
                          exam_session?.exam_groups?.data?.map((v, i) => (
                            <tr>
                              <td>
                                {++i +
                                  (exam_session?.exam_groups?.current_page -
                                    1) *
                                    exam_session?.exam_groups?.per_page}
                              </td>
                              <td>{v?.student?.name}</td>
                              <td className="text-center">
                                {v?.student?.classroom?.title}
                              </td>
                              <td className="text-center">
                                {v?.student?.gender}
                              </td>
                              <td className="text-center">
                                <button
                                  className="btn btn-sm btn-danger border-0"
                                  type="button"
                                  onClick={(e) => onDestroy(e, v?.id)}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="fw-bold text-center">
                              No Data Found !
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <Pagination links={exam_session?.exam_groups?.links} />
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
