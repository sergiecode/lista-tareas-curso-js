## Link al curso completo de Javascript en Youtube:
[VIDEO CURSO GRATIS COMPLETO: JavaScript Desde Cero por Sergie Code](https://youtu.be/N8Xt5rP_DUo)


# Lista de tareas en JavaScript

Este repositorio contiene una aplicación simple de lista de tareas implementada en JavaScript. Puedes agregar tareas y eliminarlas fácilmente.

## Uso

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Verás una interfaz para agregar tareas. Ingresa el texto de la tarea en el campo de entrada y haz clic en el botón "Agregar tarea".
4. La tarea se añadirá a la lista de tareas debajo. Puedes marcar una tarea como completada haciendo clic en el checkbox.
5. Si deseas eliminar una tarea, simplemente haz clic en el botón "Eliminar" junto a ella.

## JavaScript

El archivo `script.js` contiene el código JavaScript que controla la funcionalidad de la lista de tareas. Aquí se encuentran las siguientes funciones:

- `crearTarea(textoTarea)`: Esta función crea un elemento de tarea en el DOM. Recibe el texto de la tarea como parámetro y devuelve el elemento creado.
- `agregar.addEventListener("click", function() { ... })`: Este evento se dispara cuando se hace clic en el botón "Agregar tarea". Recupera el texto de la tarea ingresado, crea un elemento de tarea utilizando la función `crearTarea`, lo agrega a la lista de tareas y limpia el campo de entrada.
- `botonEliminar.addEventListener("click", function() { ... })`: Este evento se dispara cuando se hace clic en el botón "Eliminar" de una tarea. Elimina el elemento de tarea correspondiente del DOM.

