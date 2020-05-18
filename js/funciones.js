/**************************************      
 *                                    /
 *     MARCAS DE COCHE DEL USUARIO    /
 *                                    /
 *************************************/

/** 
 * Esta aplicación pide al usuario su nombre y tres marcas de 
 * coche que ha tenido y almacena las marcas de coche en una array.
 */

// Creo una variable global que contenga una array vacía.
var listaMarcasDeCoche = [];

// Creo una función que solicite al usuario su nombre y las 3 marcas de coche.
function solicitarDatosUsuario() {
    var nombreUsuario = String(prompt("Por favor, introduce tu nombre: "));
    var marcaCoche1 = String(prompt(`Hola ${nombreUsuario}, introduce tu primera marca de coche: `));
}