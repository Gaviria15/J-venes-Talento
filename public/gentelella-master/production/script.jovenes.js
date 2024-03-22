new DataTable('#example');
function alertaEliminar() {
  // Configura la alerta
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminarlo"
  }).then((result) => {
    if (result.isConfirmed) {
      // Muestra una segunda alerta si el usuario confirma la acción
      Swal.fire({
        title: "¡Eliminado!",
        text: "Tu archivo ha sido eliminado.",
        icon: "success"
      });
    }
  });
}

function alertaEstado() {
  // Configura la alerta
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, estado"
  }).then((result) => {
    if (result.isConfirmed) {
      // Muestra una segunda alerta si el usuario confirma la acción
      Swal.fire({
        title: "¡Eliminado!",
        text: "Tu archivo ha sido eliminado.",
        icon: "success"
      });
    }
  });
}

