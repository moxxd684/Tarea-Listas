let boton = document.getElementById("add");
let lista = document.querySelector("ul");
let inputTexto = document.getElementById("texto");

function addTask()  {
    if (inputTexto.value !== ""){
        let nuevoItem = document.createElement("li");
        nuevoItem.setAttribute("class", "my-3");
        nuevoItem.textContent= inputTexto.value;
        lista.appendChild(nuevoItem);
        addButtonBorrar(nuevoItem);
    } 
function addButtonBorrar(nuevoItem){
    let buttonborrar = document.createElement("button");
    buttonborrar.textContent = "Borrar";
    buttonborrar.setAttribute("class", "btn btn-primary float-start mx-4");
    console.log(buttonborrar);
    
    buttonborrar.addEventListener("click", function() {
        console.log(nuevoItem);
        console.log(""+ nuevoItem.textContent);
        nuevoItem.remove();
    });

    nuevoItem.appendChild(buttonborrar);
;}

};
boton.addEventListener("click", function() {
    addTask()
    
});
inputTexto.addEventListener('keypress', function (e){
    console.log(e.key);
    if(e.key === 'Enter'){
        addTask()
    }

});