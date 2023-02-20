import {
  DashboardSVG,
  KelasSVG,
  MapelSidebarSVG,
  ReportSidebarSVG,
  SesiUjianSVG,
  SiswaSVG,
  UjianSVG,
} from "@/components";
import { Link } from "@inertiajs/react";
import React from "react";

const SidebarAdmin = () => {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="sidebar d-lg-block bg-gray-800 text-white collapse"
        data-simplebar
      >
        <div className="sidebar-inner px-4 pt-3">
          <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
            <div className="collapse-close d-md-none">
              <a
                href="#sidebarMenu"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <svg
                  className="icon icon-xs"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <ul className="nav flex-column pt-3 pt-md-0">
            <li className="nav-item">
              <span className="mt-2 d-flex justify-content-between">
                <span>
                  <span className="sidebar-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-mortarboard-fill icon icon-xs me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg>
                  </span>
                  <span className="sidebar-text fw-bold">UJIAN ONLINE</span>
                </span>
                <span>
                  <span className="badge badge-sm bg-secondary ms-1 text-gray-800">
                    PRO
                  </span>
                </span>
              </span>
            </li>

            <li
              role="separator"
              className="dropdown-divider mt-4 mb-3 border-gray-700"
            ></li>

            <li className="nav-item">
              <Link
                href="/admin/dashboard"
                className="nav-link d-flex justify-content-between"
              >
                <span>
                  <span className="sidebar-icon">
                    <DashboardSVG />
                  </span>
                  <span className="sidebar-text">Dashboard</span>
                </span>
              </Link>
            </li>

            <li
              role="separator"
              className="dropdown-divider mt-2 mb-2 border-gray-700"
            ></li>

            <li className="nav-item">
              <Link
                href="/admin/lessons"
                className="nav-link d-flex justify-content-between"
              >
                <span>
                  <span className="sidebar-icon">
                    <MapelSidebarSVG width={18} height={18} />
                  </span>
                  <span className="sidebar-text">Mata Pelajaran</span>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/admin/classrooms"
                className="nav-link d-flex justify-content-between"
              >
                <span>
                  <span className="sidebar-icon">
                    <KelasSVG width={18} height={18} />
                  </span>
                  <span className="sidebar-text">Kelas</span>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/admin/students"
                className="nav-link d-flex justify-content-between"
              >
                <span>
                  <span className="sidebar-icon">
                    <SiswaSVG width={18} height={18} />
                  </span>
                  <span className="sidebar-text">Siswa</span>
                </span>
              </Link>
            </li>

            <li
              role="separator"
              className="dropdown-divider mt-2 mb-2 border-gray-700"
            ></li>

            <li className="nav-item">
              <Link
                href="/admin/exams"
                className="nav-link d-flex justify-content-between"
              >
                <span>
                  <span className="sidebar-icon">
                    <UjianSVG width={18} height={18} />
                  </span>
                  <span className="sidebar-text">Ujian</span>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/admin/exam_sessions"
                className="nav-link d-flex justify-content-between"
              >
                <span>
                  <span className="sidebar-icon">
                    <SesiUjianSVG width={18} height={18} />
                  </span>
                  <span className="sidebar-text">Sesi Ujian</span>
                </span>
              </Link>
            </li>

            <li
              role="separator"
              className="dropdown-divider mt-2 mb-2 border-gray-700"
            ></li>

            <li className="nav-item">
              <Link
                href="/admin/reports"
                className="nav-link d-flex justify-content-between"
              >
                <span>
                  <span className="sidebar-icon">
                    <ReportSidebarSVG width={18} height={18} />
                  </span>
                  <span className="sidebar-text">Laporan Nilai</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SidebarAdmin;
