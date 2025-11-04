const { title } = require("process");

module.exports = [
    {
        id:1,
        title: "CuestionarioJava",
        questions:[
            {
                id: 1,
                text: ["Cual es el resultado que muestra esta parte:", "    int x=5", " System.out.println(x > 2 ? \"Mayor\" : \"Menor\"); "],
                options: ["Mayor", "Menor", "true", "error de compilación"],
                correct: "Mayor"
            },{
                id: 2,
                text: "Qué palabra que se usa para heredar de una clase?",
                options: ["extends", "inherts", "implements", "super"],
                correct: "extends"
            },{
                id: 3,
                text: "Selecciona el tipo de datos que es primitivo de java",
                options: ["String", "Integer", "boolean", "ArrayList"],
                correct: "boolean"
            },{
                id: 4,
                text: ["Que imprime el siguiente código?", "    String s1 = \"Hola\";", " String s2 = \"Hola\";", "System.out.println(s1 == s2);"],
                options: ["true", "false", "Hola", "Error"],
                correct: "true"
            },{
                id: 5,
                text: "Valor inicial de una variable de instancia de tipo entero:",
                options: ["0", "null", "1", "No tiene valor inicial"],
                correct: "0"
                
            },{
                id: 6,
                text: "Cual método es la entrada de una aplicación Java?",
                options: ["start()", "main()", "run()", "init()"],
                correct: "main()"
            },{
                id: 7,
                text: "Que declaración de arreglos es la correcta?",
                options: ["Int[] arr = new int[];", "int arr[] = new int[5];", "int arr = new int[5];", "array int arr = new array[5];"],
                correct: "int arr[] = new int[5];"
            },{
                id: 8,
                text: ["Que imprime el siguiente código", "    int i=0;", "    System.out.printLn(i++);"],
                options: ["0", "1", "2", "null"],
                correct: "0"
            },{
                id: 9,
                text: "Palabra clave para crear una instancia de una clase:",
                options: ["new", "class", "this", "instance "],
                correct: "new"
            },{
                id: 10,
                text: "Cual modificador es el más restrictivo?",
                options: ["public", "protected", "default", "private"],
                correct: "private"
            },{
                id: 11,
                text: ["Que imprime el siguiente código?", "for(int i=0; i<3; i++){", "    if(i==1) break;", "     System.out.print(1);", "}"],
                options: ["0", "01", "012", "0 1 2"],
                correct: "0"
            },{
                id: 12,
                text: "Cual de estas opciones es la superclase de todas las clases?",
                options: ["Object", "Class", "Super", "Root"],
                correct: "Object"
            },{
                id: 13,
                text: "Qué ocurre cuando intentas compilar un método con dos parámetros con el mismo nombre?",
                options: ["Funciona correctamente", "Error de compilación", "El segundo parámetro sobrescribe al primero", "Solo se permite en métodos estáticos"],
                correct: "Error de compilación"
            },{
                id: 14,
                text: ["Qué imprime esta parte?", "     System.out.println(10 + 20 + “Hola”);"],
                options:["30Hola", "1020Hola", "Error", "10 20 Hola"],
                correct: "30Hola"
            },{
                id:15,
                text: "Cual es una interfaz funcional?",
                options: ["java.until.List", "java.lang.Runnable", "java.util.ArrayList", "java.lang.String"],
                correct: "java.lang.Runnable"
            },{
                id: 16,
                text: "Palabra clave que se utiliza para prevenir que un método sea sobrescrito:",
                options: ["final", "static", "private", "sealed"],
                correct: "final"
            }
        ]
    },
    {
        id:2,
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
    {
        id:3,
        title: "CuestionarioC++",
        questions:[
            {
                id: 1,
                text: "Palabra clave para definir una clase",
                options: ["class", "struct", "className", "define"],
                correct: "class"
            },{
                id: 2,
                text: "Operador para crear y asignar memoria dinámica",
                options: ["alloc", "malloc", "new", "create"],
                correct: "new"
            },{
                id: 3,
                text: "que se usa para acceder a un miembro de un objeto a través de un puntero?",
                options: ["Punto (.)", "flecha (->)", "Dos puntos dobles (::)", "asterisco (*)"],
                correct: "flecha (->)"
            },{
                id: 4,
                text: "Que es la sobrecarga de funciones?",
                options: ["Redefinir una función en una clase derivada", "tener múltiples funciones con el mismo nombre, pero diferentes parámetros", "hacer que una función sea más larga de lo necesario", "llamar a una función demasiadas veces"],
                correct: "tener múltiples funciones con el mismo nombre, pero diferentes parámetros"
            },{
                id: 5,
                text: ".- Cual no es un tipo de acceso en una case?",
                options: ["public", "private", "protected", "secure"],
                correct: "secure"
            },{
                id: 6,
                text: ["Que imprime el siguiente código?", "   int x=5, y=2;", "   cout << x/y"],
                options: ["2.5", "2", "3", "Error de compilación"],
                correct: "2"
            },{
                id: 7,
                text: "estructura utilizada para manejar excepciones:",
                options: ["If-else", "try-catch", "throw-catch", "error-handler"],
                correct: "try-catch"
            },{
                id: 8,
                text: ["Cuál es la salida del siguiente código", "for(int i=0; i<3; i++){", "   cout << i << “ ”", "}"],
                options: ["0 1 2", "0 1 2 3", "1 2 3", "1 2"],
                correct: "0 1 2"
            },{
                id: 9,
                text: "Que hace el doble dos puntos (::)?",
                options: ["Accede a miembro de objeto", "Definir alcance de variable local", "Acceder a miembro de una clase desde afuera", "Separar nombres de archivos"],
                correct: "Acceder a miembro de una clase desde afuera"
            },{
                id: 10,
                text: "para que sirve const?",
                options: ["Declarar variable que no cambia", "Hacer una función constante", "Declarar constantes", "Todas son correctas"],
                correct: "Todas son correctas"
            },{
                id: 11,
                text: "Que es un constructor?",
                options: ["Función que destruye un objeto", "Función que inicializa un objeto", "Función que construye una clase", "Función que debe tener parámetros"],
                correct: "Función que inicializa un objeto"
            },{
                id: 12,
                text: ["Qué imprime el siguiente encabezado:", "    int m[] = {1, 2, 3};", "    cout << m[1];"],
                options: ["1", "2", "3", "0"],
                correct: "2"
            },{
                id: 13,
                text: "Palabra que permite acceder a clases heredadas en C++:",
                options: ["private", "public", "protected", "extends"],
                correct: "protected"
            },{
                id: 14,
                text: "Forma correcta de declarar un puntero",
                options:["int ptr*", "int *ptr", "*int ptr", "int ptr"],
                correct: "int *ptr"
            },{
                id:15,
                text: "Qué es es la encapsulación?",
                options: ["Ocultar detalles y controlar el acceso a los datos", "Ocultar funciones de una clase", "Declarar a todos los miembros como públicos", "Agrupar variables en un array"],
                correct: "Ocultar detalles y controlar el acceso a los datos"
            },{
                id: 16,
                text: "Qué se debe usar para liberar memoria?",
                options: ["free", "delete", "release", "remove"],
                correct: "delete"
            }
        ]
    },
    {
        id:4,
        title: "CuestionarioC#",
        questions:[
            {
                id: 1,
                text: "Palabra clave para heredar una clase",
                options: ["implements", "inherts", "extends", ":"],
                correct: ":"
            },{
                id: 2,
                text: "Tipo de dato con tamaño de 32 bits",
                options: ["short", "long", "int", "byte"],
                correct: "int"
            },{
                id: 3,
                text: ["que sucede cuando se ejecuta el siguiente código?", "   int []números = new int [5];", "   console.WriteLine(números[0]);"],
                options: ["Error de compilación", "Lanza excepción", "Imprime valor aleatorio en la consola", "Imprime un cero"],
                correct: "Imprime un cero"
            },{
                id: 4,
                text: "Cuál es el proposito del main en C#?",
                options: ["Definir todas las variables globales", "Constructor por defecto de clase principal", "Punto de entrada de la aplicación", "Método para finalzar aplicación"],
                correct: "Punto de entrada de la aplicación"
            },{
                id: 5,
                text: "Que variable maneja las excepciones?",
                options: ["error", "catch", "exception", "try"],
                correct: "catch"
            },{
                id: 6,
                text: "Palabra para crear una instancia de un objeto",
                options: ["new", "create", "instance", "this"],
                correct: "new"
            },{
                id: 7,
                text: "Selecciona la opción de una variable que contenga un valor nulo:",
                options: ["string nombre = null;", "int edad = null;", "bool bandera = null;", "double precio = null;"],
                correct: "string nombre = null;"
            },{
                id: 8,
                text: "Principio de la programación orientada a objetos (POO) que permite ocultar datos complejos y mostrar lo más simple",
                options: ["Herencia", "Polimorfismo", "Encapsulamiento", "Abstracción"],
                correct: "Abstracción"
            },{
                id: 9,
                text: "Característica que permite a un método tener en mismo nombre en diferentes parámetros:",
                options: ["Sobrescritura", "Sobrecarga", "Herencia", "Sombreado"],
                correct: "Sobrecarga"
            },{
                id: 10,
                text: ["Que imprime en la consola este código?", "  Console.WriteLine(“Hola”);"],
                options: ["HOLA", "hola", "Hola", "nada"],
                correct: "Hola"
            },{
                id: 11,
                text: "Estructura de control que repite un bloque de código un numero específico de veces:",
                options: ["If-else", "foreach", "while", "for"],
                correct: "for"
            },{
                id: 12,
                text: "Una “interface” sirve para:",
                options: ["Definir la implementación completa de una clase", "declarar un conjunto de miembros que una clase debe implementar", "ocultar métodos de una clase", "crear una nueva instancia de un objeto"],
                correct: "declarar un conjunto de miembros que una clase debe implementar"
            },{
                id: 13,
                text: "Cual es el modificador de acceso para los miembros de una clase si no se especifica ninguno?",
                options: ["public", "private", "internal", "protected"],
                correct: "private"
            },{
                id: 14,
                text: "Palabra clave que permite que un método sea sobrescrito en una clase derivada:",
                options:["abstract", "virtual", "override", "new"],
                correct: "virtual"
            },{
                id:15,
                text: "Tipo de librería que se debe incluir para usar tipos como List<T>",
                options: ["System.IO", "System.Collections", "System.Linq", "System.Collections.Generic"],
                correct: "System.Collections.Generic"
            },{
                id: 16,
                text: ["Qué imprime el siguiente código?", "    Double resultado = 5/2;", "    Console.WriteLine(resultado);"],
                options: ["2.5", "2", "2.0", "3"],
                correct: "2.0"
            }
        ]
    }
];