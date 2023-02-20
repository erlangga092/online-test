import {
  DashboardCard,
  KelasSVG,
  MapelSVG,
  SesiUjianSVG,
  SiswaSVG,
  UjianSVG,
} from "@/components";
import { LayoutAdmin } from "@/layouts";
import { Head } from "@inertiajs/react";
import React from "react";

const Dashboard = ({ students, exams, exam_sessions, classrooms, lessons }) => {
  return (
    <>
      <Head>
        <title>Dashboard - Aplikasi Ujian Online</title>
      </Head>
      <LayoutAdmin>
        <div className="container-fluid mb-5 mt-5">
          <div className="row">
            <DashboardCard
              type="info"
              icon={<KelasSVG />}
              name="Kelas"
              data={classrooms}
            />
            <DashboardCard
              type="success"
              icon={<SiswaSVG />}
              name="Siswa"
              data={students}
            />
            <DashboardCard
              type="tertiary"
              icon={<UjianSVG />}
              name="Ujian"
              data={exams}
            />
            <DashboardCard
              type="danger"
              icon={<SesiUjianSVG />}
              name="Sesi Ujian"
              data={exam_sessions}
            />
            <DashboardCard
              type="indigo"
              icon={<MapelSVG />}
              name="Mata Pelajaran"
              data={lessons}
            />
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
};

export default Dashboard;
