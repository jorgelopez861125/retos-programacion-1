const cantDias = parseInt(prompt('ingrese la cantidad de dias: '));

const sumaHoras = cantDias * 24;
const sumaMinutos = sumaHoras * 60;
const sumaSegundos = sumaMinutos * 60;

alert(
    `En ${cantDias} días, hay: ${sumaHoras} horas, ${sumaMinutos} minutos y ${sumaSegundos} segundos`
  );