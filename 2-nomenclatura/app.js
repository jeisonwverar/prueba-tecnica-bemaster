/* Ejercicio 2: Nomenclatura */

function getRadian(valueX, valueY, factor) {
  let sumResult = valueX + valueY;

  let multiplicationResult = sumResult * factor;

  let radian = Math.sin(multiplicationResult);
  return radian;
}

console.log(getRadian(3, 4, 5));
