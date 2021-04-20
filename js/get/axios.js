axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(function (response) {
    // función que se ejecutará al recibir una respuesta
    console.log(response);
  })
  .catch(function (error) {
    // función para capturar el error
    console.log("Error al cachar la informacion " + error);
  })
  .then(function () {
    
  });