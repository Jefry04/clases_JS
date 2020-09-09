/*ES6 (ecma script V6) 
const miFuncion = () =>{  // crea funcion flecha o funcion sin nombre
 // excepto el acceso al objeto this
}*/

const BMI = (weight, height) => {
    return weight / (height*height)
};

console.log (BMI(86, 1.86));