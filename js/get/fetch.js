fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err)=> console.log("Status code: " + err));