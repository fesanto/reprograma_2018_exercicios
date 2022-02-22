
//definindo o input e botão de add
const input = document.getElementById("listComposerInput");
const addButton = document.querySelector(".list-composer__button");

addButton.addEventListener("click", function(event){
    event.preventDefault();
    
//validando para não aceitar input vazio ou nulo
    const regex = /\w+/ig;
    if(!regex.test(input.value)){
        input.focus();
        return false;
    }

//criando o local onde as tarefas serão inseridas
    const textBox = document.querySelector(".list-area__box");

//tag span criada para colocar as tarefas    
    const textArea = document.createElement("span");

//criando através do inner html o conteúdo das tarefas dentro do text area
    textArea.innerHTML += `<span class="span-content" id="${(((1+Math.random())*0x10000)|0).toString(16).substring(1)}" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragenter="dragStart(event)" ondragleave="dragEnd(event)">
    <p class="list-area__text">${input.value}</p>
        <a href="#" onclick="check(this)"><i class="far fa-check-circle"></i></a>
        <a href="#" onclick="dell(this)"><i class="far fa-times-circle"></i></a>
        </span>`

//colocando as tarefas do text box dentro do local span text area
    textBox.appendChild(textArea);

//alterando o display do span para block    
    textBox.style.display = "block";

//resetando o texto do input após o click    
    input.value = null;
});

//função para deletar a lista d etarefas completamente
    const buttonDel = document.querySelector(".list-area__button-del");
    buttonDel.addEventListener("click", function(event){
        event.preventDefault()
        
        const spans = document.querySelectorAll(".span-content")
        spans.forEach(function (item) {
            item.remove()
        });
    });
    
// for (const span of spans) {
//     span.remove()
// }
    

//função para deletar individualmente a lista de tarefas
function dell(ex){
    let d = ex.parentNode;
    d.remove();
}

//função para check/uncheckind ividual
function check(checker){
    let checklist = checker.parentNode;

    if(checklist.style.color == "black"){
        checklist.style.textDecoration = "line-through";
        checklist.style.color = "#a8a8a8";
    }
    else{
        checklist.style.textDecoration = "none"
        checklist.style.color = "black"
    }
}

//funçao para check todas opções da lista
const buttonCheck = document.querySelector(".list-area__button-check");
let contador = 0;

function checkAll(){
    let checkboxes = document.querySelectorAll(".span-content");
    for (let i = 0; i < checkboxes.length; i++){
        if (contador % 2 === 0){
            checkboxes[i].style.textDecoration = "line-through";
            checkboxes[i].style.color = "#a8a8a8";
            buttonCheck.innerHTML = "UNCHECK ALL";
        } else{
            checkboxes[i].style.textDecoration = "none";
            checkboxes[i].style.color = "black";
            buttonCheck.innerHTML = "CHECK ALL";
        }
    }
    contador++
}

//função para construir o drag and drop

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.parentNode.insertAdjacentElement("afterEnd", document.getElementById(data));
    ev.target.parentNode.classList.remove("dragover")
}

function dragStart(ev) {
    ev.preventDefault();
    ev.target.parentNode.classList.add("dragover")
}

function dragEnd(ev) {
    ev.preventDefault();
    ev.target.parentNode.classList.remove("dragover")

}