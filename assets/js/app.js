const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');  // Corregido el nombre de la class
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'Cargando...';  // Cambiado el texto a "Cargando..."
  $b.textContent = 'Cargando...';
  $l.textContent = 'Cargando...';
  
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();  // Agregado el await
    console.log(data);
    $n.textContent = `Nombre: ${data.name}`;  // Corregido el uso de comillas y añadido el "Nombre: "
    $b.textContent = `Blog: ${data.blog}`;
    $l.textContent = `Ubicación: ${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);