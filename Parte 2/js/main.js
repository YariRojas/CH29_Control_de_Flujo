//Parte 2. Ahora, crea la función getDayNumber. Debe aceptar dos parámetros: janFirstDayNumber y yearDayNumber. El yearDayNumber será un int que va de 0 a 365. janFirstDayNumber será un int que va de 0 a 6, que representa el día de la semana del 1 de enero. Luego, su función debe calcular y devolver el día de la semana correspondiente al yearDayNumber pasado. Sugerencia: use el operador de resto (%), dividiendo su yearDayNumber por 7.

function getDayNumber(janFirstDayNumber, yearDayNumber){
    return (yearDayNumber-1)%7;
}//getDayNumber
console.log(0, 10);