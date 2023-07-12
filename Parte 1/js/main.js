//Parte 1. Primero, cree una función llamada "Horario de negocios". De manera similar al ejercicio de la clase del día de la semana, esta función debe aceptar dos parámetros: númeroDía y númeroHora. Al leer el número de día y el número de hora, su programa debe imprimir si es horario comercial o no. Debería devolver verdadero si es horario comercial y falso si no. onsiderar horario comercial 9am - 6pm. Utilice el sistema de reloj de 24 horas (6pm = 18).

function businessHours(dayNumber,hourNumber){
    if ((dayNumber>=1) && (dayNumber<=5) && (hourNumber>=9) && (hourNumber<=18)){
        return true;
    }  else {
        return false;
    }  //if
    }///businessHours

