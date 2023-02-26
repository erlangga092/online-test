import { LayoutStudent } from "@/layouts";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const WelcomeMessage = ({ auth }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="alert alert-success border-0 shadow">
          Selamat Datang, <strong>{auth?.student?.name}</strong> !
        </div>
      </div>
    </div>
  );
};

const NoExam = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="alert alert-danger border-0 shadow">
          <i className="fa fa-info-circle"></i> Tidak ada ujian yang tersedia !
        </div>
      </div>
    </div>
  );
};

function formatDateTime(v) {
  return new Intl.DateTimeFormat("id", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  }).format(new Date(v));
}

function examTimeRangeChecker(start_time, end_time) {
  return new Date() >= new Date(start_time) && new Date() <= new Date(end_time);
}

function examTimeStartChecker(start_time) {
  return new Date() < new Date(start_time);
}

function examTimeEndChecker(end_time) {
  return new Date() > new Date(end_time);
}

const Dashboard = ({ auth, exam_groups }) => {
  return (
    <>
      <Head>
        <title>Dashboard Siswa - Aplikasi Ujian Online</title>
      </Head>
      <LayoutStudent>
        <WelcomeMessage auth={auth}></WelcomeMessage>
        {exam_groups?.length ? (
          <div className="row">
            {exam_groups?.map((v, i) => (
              <div className="col-md-6" key={i}>
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <h5>{v?.exam_group?.exam?.lesson?.title}</h5> <hr />
                    <div className="table-responsive">
                      <table className="table table-centered table-bordered table-nowrap mb-0 rounded">
                        <tbody>
                          <tr>
                            <td className="fw-bold">Mata Pelajaran</td>
                            <td>{v?.exam_group?.exam?.lesson?.title}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Kelas</td>
                            <td>{v?.exam_group?.student?.classroom?.title}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Sesi</td>
                            <td>{v?.exam_group?.exam_session?.title}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Mulai</td>
                            <td>
                              {formatDateTime(
                                v?.exam_group?.exam_session?.start_time
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Selesai</td>
                            <td>
                              {formatDateTime(
                                v?.exam_group?.exam_session?.end_time
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {v?.grade?.end_time == null ? (
                      <div>
                        {examTimeRangeChecker(
                          v?.exam_group?.exam_session?.start_time,
                          v?.exam_group?.exam_session?.end_time
                        ) ? (
                          <div>
                            {v?.grade?.start_time == null ? (
                              <div>
                                <Link className="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white">
                                  Kerjakan
                                </Link>
                              </div>
                            ) : (
                              <div>
                                <Link className="btn btn-md btn-info border-0 shadow w-100 mt-2">
                                  Lanjut Kerjakan
                                </Link>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div>
                            {examTimeStartChecker(
                              v?.exam_group?.exam_session?.start_time
                            ) && (
                              <div>
                                <button
                                  className="btn btn-md btn-gray-700 border-0 shadow w-100 mt-2"
                                  disabled
                                >
                                  Belum Mulai
                                </button>
                              </div>
                            )}

                            {examTimeEndChecker(
                              v?.exam_group?.exam_session?.end_time
                            ) && (
                              <div>
                                <button
                                  className="btn btn-md btn-danger border-0 shadow w-100 mt-2"
                                  disabled
                                >
                                  Waktu Terlewat
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <button
                          className="btn btn-md btn-danger border-0 shadow w-100 mt-2"
                          disabled
                        >
                          Sudah Dikerjakan
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NoExam></NoExam>
        )}
      </LayoutStudent>
    </>
  );
};

export default Dashboard;
