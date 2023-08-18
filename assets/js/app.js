const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');  // Se corrigió el nombre del selector
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {  // Faltaba la palabra clave 'async'
  $n.textContent = 'cargando...';
  try {  // Se agrega la estructura try para manejar errores
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();  // Se agrega el await
    console.log(data);
    $n.textContent = data.name;  // Se quitaron las comillas simples
    $b.textContent = data.blog;  // "           "                "
    $l.textContent = data.location;  // "         "              "
  } catch (err) {  // Se agregó 'catch' para manejar errores
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;  // Agregada la '$' antes de 'n'
}

displayUser('stolinski').catch(handleError);