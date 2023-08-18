var todoArray = [];


function saveTodo() {
    var title = document.getElementById("title").value;
    if (title==""){
        alert("Enter valid input");
        return;
    }
    todoArray.push(title);
    document.getElementById("title").value = "";
    localStorage.setItem("my-todos", todoArray.toString());
    fetchTodos();
}

function fetchTodos() {
    var str = localStorage.getItem("my-todos");
    todoArray = str.split(",");
    var htmlString = `
   <tr>
    <th> Sr. No. </th>
    <th> title </th>
    <th> Actions</th>
   </tr>
   `

    var counter = 0;

    todoArray.forEach((ele) => {

        counter++;
        htmlString += `
    <tr>
        <td>${counter}</td>
        <td>${ele}</td>
        <td>
            <button class= "btn btn-outline-warning " onclick = "editTodo(${counter - 1})">Edit</button>
            <button class= "btn btn-outline-danger" onclick = "deletTodo(${counter - 1})">Delete</button>
        </td>
    </tr>
    `
    })

    document.getElementById("todo-table").innerHTML = htmlString;
}

function editTodo(index) {
    var newValue = prompt("do you want to change..?", todoArray[index])
    if (newValue != "" && newValue != null) {
        todoArray[index] = newValue;
        localStorage.setItem("my-todos", todoArray.toString());
        fetchTodos();
    }
}

function deletTodo(index) {
    if (confirm("are you sure, you want to delete it...?")) {
        todoArray.splice(index, 1);
        localStorage.setItem("my-todos", todoArray.toString());
        fetchTodos();

    }
}
function resetTodo(){
    localStorage.removeItem("my-todos");
    document.getElementById("todo-table").innerHTML="";
    todoArray=[];
}

// alert("i am alert");

