http_request = new XMLHttpRequest();
http_request.onreadystatechange = function(){
    if (http_request.readyState == 4 && http_request.status == 200) {
        console.log(JSON.parse(http_request.responseText));        
    }
    else{
        console.log("Algo fallo en la peticion")
    }
}

http_request.open('GET', 'https://pokeapi.co/api/v2/pokemon', true)
http_request.send();