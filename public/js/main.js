const toggleTodo = document.getElementById('todo-selection')
const toggleGrocery = document.getElementById('grocery-selection')
const groceryList = document.getElementById('grocery-list')
const todoList = document.getElementById('todo-list')
const category = document.getElementById('category')
const groceryCategory = document.getElementById('gc')
const deadline = document.getElementById('deadline')
const deleteText = document.querySelectorAll('.fa-trash')

toggleTodo.addEventListener('click', selectTodo)
toggleGrocery.addEventListener('click', selectGrocery)
Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteTask)
})

function selectTodo() {
    localStorage.setItem('selected-list', 'todo')
    groceryList.style.display = 'none'
    groceryCategory.style.display = 'none'
    todoList.style.display = 'block'
    deadline.style.display = 'block'
    category.value = 'todo'
}
if (localStorage.getItem('selected-list') === 'todo') {
    groceryList.style.display = 'none'
    groceryCategory.style.display = 'none'
    todoList.style.display = 'block'
    deadline.style.display = 'block'
    category.value = 'todo'
}

function selectGrocery() {
    localStorage.setItem('selected-list', 'grocery')
    groceryList.style.display = 'block'
    groceryCategory.style.display = 'block'
    todoList.style.display = 'none'
    deadline.style.display = 'none'
    category.value = 'grocery'
}
if (localStorage.getItem('selected-list') === 'grocery') {
    groceryList.style.display = 'block'
    groceryCategory.style.display = 'block'
    todoList.style.display = 'none'
    deadline.style.display = 'none'
    category.value = 'grocery'
}

async function deleteTask(){
    const tBody = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteTask', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'taskBodyS': tBody,
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}
