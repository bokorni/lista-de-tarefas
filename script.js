let executar = document.getElementById(`executar`);
let toDoContainer = document.getElementById(`toDoContainer`);
let addtarefa = document.getElementById(`addtarefa`);
let done = document.getElementById(`done`);

executar.addEventListener('click', function () {
    if (addtarefa.value === ``) {
        alert(`Adicione um título antes de inserir uma tarefa:`);
    }
    else {
        let botao = document.createElement(`button`);
        let task = document.createElement(`div`);
        let texto = document.createElement(`p`);
        let deletar = document.createElement(`button`)
        botao.innerText = (`Feito`);

        texto.classList.add(`texto-styling`);
        texto.innerText = addtarefa.value;
        task.appendChild(texto);
        task.appendChild(botao);
        deletar.classList.add(`twoof`);
        botao.classList.add(`oneof`);

        toDoContainer.appendChild(task);
        addtarefa.value = "";

        botao.addEventListener('click', function () {
            done.appendChild(task)
            botao.remove()



            deletar.innerText = (`Excluir`)
            task.appendChild(deletar)


        })
        deletar.addEventListener('click', function () {
            task.remove();

        })
    }
})


