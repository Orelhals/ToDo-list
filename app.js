// Seleção de DOM 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Eventos de escuta 

todoButton.addEventListener('click', addTarefa);

// Funções 

function addTarefa(event) {
    event.preventDefault()

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-list');
    todoLi.innerText = todoInput.value;

    todoDiv.appendChild(todoLi);

    //criando uma div pra mandar o botao completed e o trash:
    const todoDivInsert = document.createElement('div');
    todoDivInsert.classList.add('add');

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDivInsert.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDivInsert.appendChild(trashButton);
    todoDiv.appendChild(todoDivInsert);

    todoList.appendChild(todoDiv);
}

