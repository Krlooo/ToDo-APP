const todolist = document.getElementById("todolist")
const todos = document.querySelectorAll("li")
const addBtn = document.getElementById("addBtn")
const inputTodo = document.getElementById("todoInput")
var savedTodos = []


inputTodo.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTodo();
    }
});



addBtn.addEventListener("click", addTodo)


document.onclick = function (e) {
    if (e.target.tagName == 'LI' && e.target.id == "todo") {
        e.target.remove();
        savedTodos.splice(e.target.innerText)
    }
}

function addTodo() {

    todoInput = inputTodo.value;
    console.log(inputTodo.value)
    if (todoInput.length >= 1 && todoInput.length <= 20 && savedTodos.length < 9 && !(savedTodos.includes(todoInput))) {
        todoinput = document.createTextNode(inputTodo.value);
        const li = document.createElement('li');
        li.appendChild(todoinput)
        li.classList.add('hover:line-through', 'hover:text-red-600', 'cursor-pointer')
        li.id = "todo"
        todolist.appendChild(li)
        // todolist.innerHTML = todolist.innerHTML + `<li style='cursor: pointer;' id="todo" class=' hover:line-through hover:text-red-600'>${todoInput}</li>`;
        savedTodos.push(todoInput);
        inputTodo.value = "";
    }
};