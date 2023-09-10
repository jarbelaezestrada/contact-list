//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
let listContact = [
    {id: 1010, name: "Daniel", apellido: "Montoya", telefono: 573206783124, ubicacion:{ciudad:"Armenia", direccion: "barrio berlin"}},
    {id: 1011, name: "Sebastian", apellido: "Arbelaez", telefono: 573206782022, ubicacion:{ciudad:"Barranquilla", direccion: "barrio santander"}},
    {id: 1012, name: "Martha", apellido: "Bermudez", telefono: 573206781430, ubicacion:{ciudad:"Bogota", direccion: "barrio puerto espejo"}},
    {id: 1013, name: "Maria", apellido: "Estrada", telefono: 573206784038, ubicacion:{ciudad:"pereira", direccion: "conjunto residencial Cortijo"}},
    {id: 1014, name: "Isabel", apellido: "Diaz", telefono: 573206781230, ubicacion:{ciudad:"Medellin", direccion: "barrio el Poblado"}}


];



//Crea una función para añadir un nuevo contacto a una lista
function crearContact(contactoNuevo) {
    listContact.push(contactoNuevo);
}

crearContact({id: 1015, name: "Andres", apellido: "Perez", telefono: 573126217432, ubicacion:{ciudad: "Armenia", direccion:"barrio paraiso"}});

//console.log(listContact);

function eliminarContact(idE){
    const listaNueva = listContact.filter((contacto)=>{
        if(contacto.id !== idE){
            return contacto;
        }
    } )  
    listContact=listaNueva  
}
eliminarContact(1012);

/*eliminarContact();
console.log(listContact);*/


function imprimir () {
        console.log(listContact);  
}


imprimir(listContact);

