function saludo(params) {
    alert("Bienvenido a mi website con Bootstrap y Js :]")
}

function suma(params) {
    alert("Algoritmo que sumara ")

    // Declaramos las variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;

    // Solicitamos los valores 
    A = parseInt(prompt("Ingrese el primer valor a sumar")) ;
    B = parseInt(prompt("Ingrese el segundo valor a sumar"));

    // Realizamos los procesos
    S = A + B;

    // Mostrar el resultado en pantalla
    alert("El resultado de la suma es: " + S);


}

function operaciones(params) {
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;
    let X = 0;
    

    A = parseInt(prompt("Ingrese el primer numero a operar"));
    B = parseInt(prompt("Ingrese el segundo numero a operar"));

    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;

    alert("El resultado de la operacion es: " + S,R,M,D);
    


    
}

function mayor(params) {
    alert("Algoritmo que determinará el número mayor de los ingresados");

    let N1 = 0;
    let N2 = 0;

    N1 = parseInt(prompt("Ingrese el primer valor"));
    N2 = parseInt(prompt("Ingrese el segundo valor"));

        // == COMPARAR VALORES

    if (N1 == N2) {
        alert("Los valores ingresados son iguales :(");
    }

    else if ( N1>N2) {
        alert("El numero mayor es: " + N1);
    }
    
    else{
        alert("El numero mayor es: " + N2);
    }
    
    // && ES EL AND     (N1 == N2) && (N1 == N3) PARA QUE TODOS LOS NUMEROS SEAN IGUALES

    
}

function menor(params) {
    
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let resultado = 0;

    aler


}

function promedio(params) {
    
    alert("Algoritmo para los promedios de los estudiantes")

    let nombre = 0;
    let materia = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    let n7 = 0;
    let suma = 0; 
    let resultado = 0;

    
    nombre = prompt("Ingrese su nombre por favor: ");
    materia = prompt("Ingrese el nombre de la materia por favor: ");

    n1 = parseInt(prompt("Ingrese la primera del estudiante"));
    n2 = parseInt(prompt("Ingrese la segunda nota del estudiante"));
    n3 = parseInt(prompt("Ingrese la tercera del estudiante"));
    n4 = parseInt(prompt("Ingrese la cuarta del estudiante"));
    n5 = parseInt(prompt("Ingrese la quinta nota del estudiante"));
    n6 = parseInt(prompt("Ingrese la sexta nota del estudiante"));
    n7 = parseInt(prompt("Ingrese la ultima nota del estudiante"));

    suma = n1+n2+n3+n4+n5+n6+n7;
    resultado = suma/7;
   

    

    if (resultado > 6) {
        alert("Felicidades usted aprobo la materia con un promedio de" + resultado)
    }

    else if (resultado < 6) {
        alert(nombre + "Mal ahi haz reprobado panita con un promedio de " + resultado )
    }
    
    
    
}
    // EL COLEGIO ABC REQUIERE UN ALGORITMO O UN SISTEMA QUE PERMITA A LOS DIFERENTES ESTUDIANTES INGRESAR SU NOMBRE, MATERIA, Y 7 CALIFICACIONES. Y ESTE LE INDIQUE SI APROBO O REPROBO LA MATERIA TNEINDO EN CUENTA QUE SE APRUBA SI EL PUNTAJE ES MAYOR O IGUAL 6
    // 


function conversion(params) {
    alert("Algoritmo para la conversión de dolares a pesos colombianos, Euros y Soles.");
    let dolar = 0;
    dolar = parseInt(prompt("Digite el valor en dolares que desea convertir "));

    valorP= 4118;
    valorE= 0.92;
    valorS= 3.72;

    pesosc= valorP * dolar;
    euros= valorE * dolar;
    soles= valorS * dolar;

    alert("El valor en pesos colombianos es: $" + pesosc + "\nEl calor en euros es: €" + euros + "\nEl valor en soles es: S/" + soles);

}

// SE REQUIERE UN SISTEMA O ALGORITMO QUE AL INGRESAR EL VALOR EN DOLARES NOS INDIQUE A CUANTOS PESOS COLOMBIANOS EQUIVALE, EUROS Y SOLES


    function cdt(params) {
        
    }

    // UN INDIVIDUO DESEA INVERTIR SU CAPITAL EN UN BANCO Y REQUIERE DE SABER CUANDO DINERO GANARA DESPUES DE L NUMERO DE AÑOS TENIENDO EN CUENTA QUE EL BANCO PAGA UN INTERES DEL 1,3% MENSUAL





    // html, css, atributos, bootstrap, maquetacion, reglas de css, que es un selector, etiquetas, 

    function circulo(){
        // Capturamos en una constante el elemento html que deseamos manipular
        const figura = document.getElementById("figura");
        // A este elemento en html le agregamos la clase
        figura.classList.toggle("circulo");
        // Add para agregar, remove para remover, toggle para dar click agregar y si se vulve a dar click se quitara
    }


    function horizontal(){
        const horizon = document.querySelector("#figura");   
        horizon.classList.toggle("horizontal");
    }

    function vertical(){
        const vertic = document.getElementById("figura");
        vertic.classList.toggle("vertical")
    }

    function gif(){
        const giff = document.getElementById("figura")
        giff.classList.toggle("gif")
    }


    function panelLateral(){
        const panel = document.getElementById("panel-lateral");

        panel.classList.toggle("active");
    }


    function panelsuperior(){
        const panel = document.getElementById("panel-superior");

        panel.classList.toggle("active");
    }


    function moveTop(){
        const figura = document.querySelector("#figura");

        figura.classList.toggle("top");
    }


    function moveLeft(){
        const figura = document.querySelector("#figura");

        figura.classList.toggle("left");
    }


    function moveRight(){
        const figura = document.querySelector("#figura");

        figura.classList.toggle("right");
    }


    function moveBottom(){
        const figura = document. querySelector("#figura");

        figura.classList.toggle("bottom");
    }


    function degradado(){
        const degradado = document. querySelector("#figura");

        degradado.classList.toggle("degradado");
    }


    function rombo(){
        const rombo = document. getElementById("figura");

        rombo.classList.toggle("rombo");
    }


    function triangulo(){
        const triangulo = document. getElementById("figura");

        triangulo.classList.toggle("triangulo");
    }