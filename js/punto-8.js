/**
 * Instrucciones: vas con tus amigos a tu restaurante favorito
 * y acuerdan dividir la cuenta. Para facilitar las cosa pedirás
 * al usuario que indique el total a pagar, entre cuantas personas
 * se dividirá la cuenta, porcentaje de propina a incluir, un
 * porcentaje de impuestos, total a pagar incluyendo propina más
 * impuestos y el total a pagar por cada persona.
 */

 const subTotal = parseFloat(prompt('Ingrese el total a pagar'));
 const cantidadPersonas = parseInt(prompt('Ingrese la cantidad de personas'));
 const porcentajePropina = parseFloat(
   prompt('Ingrese el porcentaje de propina a incluir')
 );
 const porcentajeImpuestos = parseFloat(
   prompt('Ingrese el porcentaje de impuestos a incluir')
 );
 
 const calculo =
   subTotal +
   (porcentajePropina * subTotal) / 100 +
   (porcentajeImpuestos * subTotal) / 100;
 
 const resultado = `Restaurant El Gourmet
 Sub Total: ${subTotal.toFixed(2)}
 % propina: ${porcentajePropina.toFixed(2)}
 % impuestos: ${porcentajeImpuestos.toFixed(2)}
 Total: ${calculo.toFixed(2)}
 Cantidad de Personas: ${cantidadPersonas}
 Total x Persona: ${(calculo / cantidadPersonas).toFixed(2)}
 --------------------------------------
 Muchas gracias, vuelva prontosss :)
 `;
 
 alert(resultado);