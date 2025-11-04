const { title } = require("process");

module.exports = [
    {
    
        id:1,
        title: "CuestionarioJavaScript",
        questions:[
            {
                id: 1,
                text: "Metodo para imprimir en la consola del navegador:",
                options: ["print()", "console.log()", "document.write()", "alert()"],
                correct: "console.log()"
            },{
                id: 2,
                text: "Cual no es un tipo de dato primitivo en JavaSript?",
                options: ["String", "Number", "Boolean", "Array"],
                correct: "Array"
            },{
                id: 3,
                text: "Palabra para declarar una variable que no puede ser resignada:",
                options: ["val", "let", "const", "static"],
                correct: "const"
            },{
                id: 4,
                text: "Cual es el resultado de '5' + 3",
                options: ["8", "53", "Error", "35"],
                correct: "53"
            },{
                id: 5,
                text: "Operador para comparar el valor y el tipo de dato:",
                options: ["=", "==", "===", "!="],
                correct: "==="
            },{
                id: 6,
                text: "Como se escribe la función correctamente?",
                options: ["function myFunction() {}", "def myFunction() {}", "function = myFunction() {}", "function:myFunction() {}"],
                correct: "function myFunction() {}"
            },{
                id: 7,
                text: "método para agregar un elemento al final:",
                options: ["pop()", "push()", "shift()", "unshift()"],
                correct: "push()"
            },{
                id: 8,
                text: "cuál es el valor de “typeof null” ?",
                options: ["null", "undefined", "object", "NaN"],
                correct: "object"
            },{
                id: 9,
                text: ".- Que devuelve la expresión ¡true ?",
                options: ["true", "false", "undefined", "NaN"],
                correct: "false"
            },{
                id: 10,
                text: "Con que signo se comenta en JavaScript?",
                options: ["//", "/**/", "#", "<!-- -->"],
                correct: "//"
            },{
                id: 11,
                text: "Que hace el metodo Array.isArray() ?",
                options: ["Convierte un objeto en arreglo", "verifica si es un arreglo", "Ordena elementos de un arreglo", "une dos arreglos"],
                correct: "verifica si es un arreglo"
            },{
                id: 12,
                text: "¿Cuál es el resultado de 2 == “2” ?",
                options: ["true", "false", "undefined", "NaN"],
                correct: "true"
            },{
                id: 13,
                text: "Que palabra clave detiene la ejecución de un bucle?",
                options: ["stop", "break", "exit", "return"],
                correct: "break"
            },{
                id: 14,
                text: "como accede a propiedad name de un objeto person?",
                options:["person[name]", "person.name", "person->name", "todas son correctas"],
                correct: "person.name"
            },{
                id:15,
                text: "que devuelve “hello”.toUpperCase() ?",
                options: ["HELLO", "Hello", "hello", "Error"],
                correct: "HELLO"
            },{
                id: 16,
                text: "propósito de la función parseInt()",
                options: ["Analizar string y devolver un número entero", "Convertir número a string", "Redondear un número decimal", "Verificar si un valor es un número"],
                correct: "Analizar string y devolver un número entero"
            }
        ]
    },
];