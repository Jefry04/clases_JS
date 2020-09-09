
/*
const usuarios = [
    {name: "Jefferson", apellido:"vasquez"},
    {name:"Michelle", apellido:"Vasquez"}
    ];
const nombres = usuarios.map (x => x.name);
console.log(nombres);*/

// Metodo Filter -- ver clase


// metodo Find
const usuarios = [
    {name: "Jefferson", apellido:"vasquez"},
    {name:"Michelle", apellido:"Vasquez"}
    ];
    console.log (usuarios.find(usuario => usuario.name ==="Michelle")); //Encuentra el name que tenga michelle y lo devuelve
    
// metodo reduce
const numeros2= [1,2,3,4,5];
const resultado3 = numeros2.reduce ((acumulador, elemento) => acumulador + elemento);
console.log (resultado3);





