// Declaración de variables
    // Body
var	cuerpo_Body                       = $('#cuerpoBody'),
    // Display
    pantalla_Valores                  = $('#pantallaValores'),
    // Operadores 1 digito
    boton_Especial_Elevado_Potencia_2 = $('#botonEspecialElevadoPotencia2'),
    boton_Especial_Elevado_Potencia_3 = $('#botonEspecialElevadoPotencia3'),
    boton_Especial_Inverso            = $('#botonEspecialInverso'),	
    boton_Especial_Raiz_2             = $('#botonEspecialRaiz2'),
    boton_Especial_Raiz_3             = $('#botonEspecialRaiz3'),
    boton_Especial_Entero             = $('#botonEspecialEntero'),
    boton_Especial_2_Elevado_N        = $('#botonEspecial2ElevadoN'),
    boton_Especial_Factorial          = $('#botonEspecialFactorial'),
    // Operadores 2 digitos
    boton_Operacion_Division          = $('#botonOperacionDivision'),	
  	boton_Operacion_Multiplicacion    = $('#botonOperacionMultiplicacion'),
  	boton_Operacion_Resta             = $('#botonOperacionResta'),	
  	boton_Operacion_Suma              = $('#botonOperacionSuma'),
  	boton_Especial_Elevado_Potencia   = $('#botonEspecialElevadoPotencia'),
  	// Operacion con separadores CVS
  	boton_Especial_Sumatorio          = $('#botonEspecialSumatorio'),
  	boton_Especial_Producto           = $('#botonEspecialProducto'),
    // Igual / Decimal / separador /Positivo, Negativo
    boton_Operacion_Igual             = $('#botonOperacionIgual'),
    boton_Numero_Decimal              = $('#botonNumeroDecimal'),
  	boton_Numero_Separador            = $('#botonNumeroSeparador'),
  	boton_Especial_Positivo_Negativo  = $('#botonEspecialPositivoNegativo'),
  	// Limpiar / Borrar
  	boton_Especial_Limpiar_CE         = $('#botonEspecialLimpiarCE'),
  	boton_Especial_Limpiar_C          = $('#botonEspecialLimpiarC'),
  	boton_Especial_Borrar             = $('#botonEspecialBorrar'),
  
    // Comodines para las operaciones con 2 digitos
    memoria                           = 0,
    operador                          = "",
    separador                         = "",
    valor                             = 0,
    decimal                           = 0,
      
  	boton_Numero = []; // Array vacío para los botones del 0 al 9

// Bucle for que captura todos los botones y los almacena en el array "botones" definido como variable "botones"
// Se inicializa i en 0 mientras i es menor o igual a 9 i se incrementa en 1
for ( var i = 0; i <= 9; i++ ) {
  // Captura el botón #botonNumeroi y lo almacena en la posición i del array i equivale a su valor mientras se ejecuta el bucle es decir, empieza en 0 y termina en 9
  boton_Numero[i] = $('#botonNumero' + i);
}

/*Se ejecuta al pulsar el botón C. Se limpian todas las variables*/
boton_Especial_Limpiar_C.on('click', 
	function () {
		"use strict";
		pantalla_Valores.val("");
		pantalla_Valores.attr("placeholder","0");
		memoria = 0;
		operador = "";
	}
);

/*Se ejecuta al pulsar el botón Borrar. Se elimina el ultimo digito introducido*/
boton_Especial_Borrar.on('click', function () {
	"use strict";
	pantalla_Valores.val(pantalla_Valores.val().substr(0,pantalla_Valores.val().length-1));
});

/* Operaciones con 1 dígito */
/* x elevado a 2 */
boton_Especial_Elevado_Potencia_2.on('click', function () {"use strict"; valor = pantalla_Valores.val(); pantalla_Valores.val(valor * valor);}); 
/* x elevado a 3 */
boton_Especial_Elevado_Potencia_3.on('click', function () {"use strict"; valor = pantalla_Valores.val(); pantalla_Valores.val(Math.pow(valor,3));}); 
/* Inverso */
boton_Especial_Inverso.on('click', function () {"use strict"; valor = pantalla_Valores.val(); pantalla_Valores.val(1 / valor);}); 
/* Raíz Cuadrada de x */
boton_Especial_Raiz_2.on('click', function() {"use strict"; valor = pantalla_Valores.val(); pantalla_Valores.val(Math.sqrt(valor));});
/* Raíz Cubica de x */
boton_Especial_Raiz_3.on('click', function() {"use strict"; valor = pantalla_Valores.val(); pantalla_Valores.val(Math.pow(valor,1/3));}); 
/* Entero de un número */
boton_Especial_Entero.on('click', 
	function () {
		"use strict";
		valor = pantalla_Valores.val();
		if (valor >= 0) {
			pantalla_Valores.val(Math.floor(valor));
		} else {
			pantalla_Valores.val(-Math.ceil(valor));
		}
	}
); 

/* 2 elevado a n */
boton_Especial_2_Elevado_N.on('click', 
	function () {
		"user strict";
		var resultado = 1;
		valor = pantalla_Valores.val();
		while (valor !== 0) {
			resultado = resultado * 2;
			valor = valor -1;
		}
		pantalla_Valores.val(resultado);
	}
);

/* Factorial */
boton_Especial_Factorial.on('click',
	function () {
		"user strict";
		var resultado = 1;
		valor = pantalla_Valores.val();
		for (i = 1; i <= pantalla_Valores.val(); i++) {
			resultado *= i;
		}
		pantalla_Valores.val(resultado);
	}
);

/* Operaciones con 2 digitos */
/* Suma */
boton_Operacion_Suma.on('click', function () {"use strict"; memoria = pantalla_Valores.val(); pantalla_Valores.val(""); pantalla_Valores.attr("placeholder", "+"); operador = "+";});
/* Resta */
boton_Operacion_Resta.on('click', function () {"use strict"; memoria = pantalla_Valores.val(); pantalla_Valores.val(""); pantalla_Valores.attr("placeholder", "-"); operador = "-";});
/* Multiplicación */
boton_Operacion_Multiplicacion.on('click', function () {"use strict"; memoria = pantalla_Valores.val(); pantalla_Valores.val(""); pantalla_Valores.attr("placeholder", "X"); operador = "X";});
/* División */
boton_Operacion_Division.on('click', function () {"use strict"; memoria = pantalla_Valores.val(); pantalla_Valores.val(""); pantalla_Valores.attr("placeholder", "/"); operador = "/";});
/* x elevado a y */
boton_Especial_Elevado_Potencia.on('click', function () {"use strict"; memoria = pantalla_Valores.val(); pantalla_Valores.val(""); pantalla_Valores.attr("placeholder", "^"); operador = "^";});

/* Igual */
boton_Operacion_Igual.on('click', 
	function () {
		"use strict";
		if (operador === "+") {pantalla_Valores.val(+memoria + (+pantalla_Valores.val()));}
		if (operador === "-") {pantalla_Valores.val(+memoria - +pantalla_Valores.val());}
		if (operador === "X") {pantalla_Valores.val(+memoria * +pantalla_Valores.val());}
		if (operador === "/") {pantalla_Valores.val(+memoria / +pantalla_Valores.val());}
		if (operador === "^") {pantalla_Valores.val(Math.pow(+memoria, +pantalla_Valores.val()) );}
	}
);

/* Operaciones con separadores. Formato CSV */
/* Sumatorio nº's en formato CSV */
boton_Especial_Sumatorio.on('click',
	function () {
		"use strict";
		var pantalla_Valores_Aux = pantalla_Valores,
		    lista_Valores = pantalla_Valores_Aux.val().split("."),
		    i   = 0,
		    acc = 0;
		
		while (i < lista_Valores.length) {
			acc += +lista_Valores[i];
			i++;
		}
		pantalla_Valores_Aux.val(acc);
	}
);

/* Producto nº's en formato CSV */
boton_Especial_Producto.on('click',
	function () {
		"use strict";
		var pantalla_Valores_Aux = pantalla_Valores,
		    lista_Valores = pantalla_Valores_Aux.val().split("."),
		    i   = 0,
		    acc = 1;
		
		while (i < lista_Valores.length) {
			acc *= +lista_Valores[i];
			i++;
		}
		pantalla_Valores_Aux.val(acc);
	}
);

/* Botones números */
/* Botón 0 */
boton_Numero[0].on('click',
	function () {
		"use strict";
		var num_0 = 0;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_0);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_0);
		}
	}
);

/* Botón 1 */
boton_Numero[1].on('click',
	function () {
		"use strict";
		var num_1 = 1;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_1);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_1);
		}
	}
);

/* Botón 2 */
boton_Numero[2].on('click',
	function () {
		"use strict";
		var num_2 = 2;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_2);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_2);
		}
	}
);

/* Botón 3 */
boton_Numero[3].on('click',
	function () {
		"use strict";
		var num_3 = 3;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_3);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_3);
		}
	}
);

/* Botón 4 */
boton_Numero[4].on('click',
	function () {
		"use strict";
		var num_4 = 4;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_4);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_4);
		}
	}
);

/* Botón 5 */
boton_Numero[5].on('click',
	function () {
		"use strict";
		var num_5 = 5;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_5);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_5);
		}
	}
);

/* Botón 6 */
boton_Numero[6].on('click',
	function () {
		"use strict";
		var num_6 = 6;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_6);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_6);
		}
	}
);

/* Botón 7 */
boton_Numero[7].on('click',
	function () {
		"use strict";
		var num_7 = 7;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_7);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_7);
		}
	}
);

/* Botón 8 */
boton_Numero[8].on('click',
	function () {
		"use strict";
		var num_8 = 8;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_8);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_8);
		}
	}
);

/* Botón 9 */
boton_Numero[9].on('click',
	function () {
		"use strict";
		var num_9 = 9;
		if (separador === ".") {
			pantalla_Valores.val(decimal += num_9);
			separador = "";
		} else {
			valor = pantalla_Valores.val();
			pantalla_Valores.val(valor + num_9);
		}
	}
);

/* Decimal */
boton_Numero_Decimal.on('click',
	function () {
		"use strict";
		decimal = pantalla_Valores.val() + ".";
		pantalla_Valores.val("");
		pantalla_Valores.attr("placeholder", decimal);
		separador = ".";
	}
);

/* Botón Positivo/Negativo */
boton_Especial_Positivo_Negativo.on('click',
	function () {
		"use strict";
		valor = +pantalla_Valores.val();
		if(valor === +pantalla_Valores.val() ) {
			pantalla_Valores.val(-valor);
		} else {
			pantalla_Valores.val(valor);
		}			
	}
);

/*function mosrarEnPantalla(datoPulsado) {
	"use strict";
	if (datoPulsado === ".") {
		if (pantalla_Valores.val().indexOf(".") < 0) {
			if (hayValores === true) {
				if (indCero === 0) {
					pantalla_Valores.val(datoPulsado);
					indCero = 1;
				} else {
					if (pantalla_Valores.val().length < 9) {
						pantalla_Valores.val(pantalla_Valores.val()+datoPulsado);
					}
				}
			}
		}
	} else {
		if (indBorrar === 1) {boton_Especial_Limpiar_CE(); indBorrar = false;}
		else if (indBorrar === 2) {boton_Especial_Limpiar_C();}
		if (indCero === 0) {
			pantalla_Valores.val(datoPulsado);
			indCero = 1;
		} else {
			if (pantalla_Valores.val().length < 9) {
				pantalla_Valores.val(pantalla_Valores.val()+datoPulsado);
			}
		}
		hayValores=true;
	}
}*/