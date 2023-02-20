import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

export const SwalDelete = ({ link, title }) => {
  Swal.fire({
    title: "Apakah anda yakin?",
    text: "Anda tidak akan dapat mengembalikan ini!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      router.post(
        link,
        {
          _method: "DELETE",
        },
        {
          onSuccess: () => {
            Swal.fire({
              title: "Deleted!",
              text: `${title} berhasil dihapus!`,
              icon: "success",
              timer: 1000,
              showConfirmButton: false,
            });
          },
          onError: (errors) => {
            Swal.fire({
              title: "Failed",
              text: errors[0],
              icon: "failed",
              showConfirmButton: true,
            });
          },
        }
      );
    }
  });
};

export const SwalUpdate = ({ link, title, form }) => {
  router.post(
    link,
    {
      _method: "PUT",
      ...form,
    },
    {
      onSuccess: () => {
        Swal.fire({
          title: "Success!",
          text: `${title} berhasil diupdate!`,
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
      },
      onError: (errors) => {
        Swal.fire({
          title: "Failed",
          text: errors[0],
          icon: "failed",
          showConfirmButton: true,
        });
      },
    }
  );
};
