/* Ejercicio 3: Pensamiento lógico
Escribe una función que tome un número entero como entrada y devuelva un array con 
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el 
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9]. */


const arraysOdd=(number)=>{
 if(typeof number!== "number" ){
    return console.log(`The value : ${number} is not a number`)
 }

 if(Math.sign(number)=== -1 || number < 1){
    return console.log(`The value: ${number} is  negative or less than one  `)
 }
  let numberOdd=[];
 for(let index = 1; index <= number; index++) {
    
        
    if(index%2!==0){
       numberOdd.push(index)
    }    
   

} 
console.log(numberOdd);
 
}
//error
arraysOdd(-8)
arraysOdd('f')
arraysOdd(0)
//check
arraysOdd(1)
arraysOdd(9)
arraysOdd(54)