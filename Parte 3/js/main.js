//Parte 3. Finalmente, cree una función que, a partir de un número de día del año (int, 0-365) y un número de hora (int, 0-23), devuelva verdadero si es horario comercial.

function part3(yearDayNumber, hourNumber) {
    let day = getDayNumber(0, yearDayNumber);
    return businessHours(day, hourNumber);
}//part3
console.log(
    part3(72, 17)
);