// Verificar si el navegador soporta los services workers para registrar el service-workers

// * Valida si el navegador soporta service-workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(registrado => console.log('Se regsitro correctamente...', registrado))
    .catch(error => console.log('Fallos el registro...', error))
} else {
  console.log('Service workers no soportado');
}