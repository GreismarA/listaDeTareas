let inputInicial = document.getElementById("input");
let contenedorLista = document.getElementById("contenedor-lista");

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let input = inputInicial.value;
    if(input!=""){
        let lista = document.createElement("div");
        let parrafo = document.createElement('p');
        parrafo.textContent= input;
        lista.appendChild(parrafo)
        contenedorLista.appendChild(lista);
        lista.classList.add("lista")
        parrafo.classList.add("parrafo")
        inputInicial.value="";

        // Boton Eliminar 
        let eliminar = document.createElement('button');
        eliminar.textContent = "Borrar";
        eliminar.classList.add("btn-eliminar")
        lista.appendChild(eliminar);

        eliminar.addEventListener('click', (e) =>{
            contenedorLista.removeChild(lista);
        })

        // Boton Hecho
        let checklist = document.createElement('button');
        checklist.textContent = "Hecho";
        checklist.classList.add("btn-hecho")
        lista.appendChild(checklist);
    
        checklist.addEventListener('click', (e) =>{
            parrafo.style= "background-color: #72DF9A;"
        })
    }
});