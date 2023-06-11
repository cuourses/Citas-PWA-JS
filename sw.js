// * Cauando se instala en serviceWorkers
self.addEventListener('install', (e) => {
  console.log('ServiceWorker instalado');

  console.log(e);
});

// * Cauando se activa en serviceWorkers
self.addEventListener('activate', (e) => {
  console.log('ServiceWorker Activado');

  console.log(e);
});