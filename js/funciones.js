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

    // Solicito el nombre del usuario mediante un prompt, que se guarda en una variable.
    var nombreUsuario = String(prompt("Por favor, introduce tu nombre: ", "Nombre"));

    // Saludo al usuario por su nombre y le pido que introduzca su primera marca de coche.
    var marcaCoche1 = String(prompt(`Hola ${nombreUsuario}, introduce tu primera marca de coche: `, "Primera marca de coche"));
        // Añado la primera marca de coche al array de la variable global.
        listaMarcasDeCoche.push(marcaCoche1);

    // Le pido al usuario la segunda marca de coche, y también la almaceno en la array.
    var marcaCoche2 = String(prompt("Introduce tu segunda marca de coche: ", "Segunda marca de coche"));
        listaMarcasDeCoche.push(marcaCoche2);

    // Le pido al usuario la tercera marca de coche, y la guardo en la array.
    var marcaCoche3 = String(prompt("Introduce tu tercera marca de coche: ", "Tercera marca de coche"))
        listaMarcasDeCoche.push(marcaCoche3);

        // Muestro en la consola la array resultante, nombrando también al usuario.
        console.log(`El usuario ${nombreUsuario} ha tenido los siguientes coches: ${listaMarcasDeCoche}.`);
        // Muestro en el navegador la misma información pero colocada de forma distinta.
        document.write(`Nombre de Usuario: ${nombreUsuario} <br> Lista de Marcas de Coche: `);
        // Con un bucle for recorro cada una de las marcas de coche, para que las devuelva separadas por un espacio.
        for (var marcaCoche = 0; marcaCoche < listaMarcasDeCoche.length; marcaCoche++) {
            document.write(listaMarcasDeCoche[marcaCoche], "\t");
        }
}

solicitarDatosUsuario();