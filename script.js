// Variables globales
let entradaTarea = document.getElementById("entradaTarea");
let agregar = document.getElementById("agregar-tarea-btn");
let listaTareas = document.getElementById("lista-tareas");

// Evento para agregar una tarea
agregar.addEventListener("click", function() {
  let textoTarea = entradaTarea.value;
  if (textoTarea !== "") {
    let tareaItem = crearTarea(textoTarea);
    listaTareas.appendChild(tareaItem);
    entradaTarea.value = "";
  }
});

// Función para crear un elemento de tarea
function crearTarea(textoTarea) {
  let tareaItem = document.createElement("li");
  tareaItem.classList.add("tarea-item");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let textoTareaSpan = document.createElement("span");
  textoTareaSpan.textContent = textoTarea;

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  // Evento para eliminar una tarea
  botonEliminar.addEventListener("click", function() {
    tareaItem.remove();
  });

  tareaItem.appendChild(checkbox);
  tareaItem.appendChild(textoTareaSpan);
  tareaItem.appendChild(botonEliminar);

  return tareaItem;
}
