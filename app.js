//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
const listContact = [
    {id: 1010, name: "Daniel Montoya"},
    {id: 1011, name: "Sebastian Arbeláez"},
    {id: 1012, name: "Martha Bermudez"},
    {id: 1013, name: "Maria Estrada"},
    {id: 1014, name: "Isabel Diaz"}


];



//Crea una función para añadir un nuevo contacto a una lista
function crearContact(contactoNuevo) {
    listContact.push(contactoNuevo);
}

crearContact({id: 1015, name: "Andres Perez"});

console.log(listContact);

function eliminarContact(noContact) {
    listContact.pop(noContact);
}

eliminarContact();
console.log(listContact);


function imprimir () {
    listContact.filter((contact) =>{
        console.log(contact);
    })
}


imprimir(listContact);

console.log(listContact);
