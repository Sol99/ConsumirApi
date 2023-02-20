const texto= document.getElementById("resp")
async function obtenerInfo() {
    await fetch("http://127.0.0.1:5500/data.json")
    .then(response => response.json() )
    .then(json => console.log(json))
    .catch(error=> console.log('solicitud fallido', error))
}

obtenerInfo();


//El fetch() devolvera una promesa que sera aceptada cuando reciba una respuesta y solo sera 
//rechazada si hay un fallo de red o si por alguna razon no se pudo completar la peticion.
//Al metodo .then() se le pasa una funcion callback donde su parametro "response" es el objeto de respuesta de la peticion 
//que hemos realizado. En su interior realizaremos la logica que queramos hacer con la respuesta a nuestra peticion.
