import Swal from 'sweetalert2';

export const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
export const loader = Swal.mixin({
  title: 'Loading...',
  didOpen: () => {
    Swal.showLoading();
  },
});
export const confirmation = Swal.mixin({
  title: 'Do you want to confirm this delete?',
  showDenyButton: true,
  confirmButtonColor: 'red',
  denyButtonColor: 'grey',
  confirmButtonText: 'Confirm',
  denyButtonText: `Cancel`,
});
