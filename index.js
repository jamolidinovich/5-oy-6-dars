const name = document.getElementById("name");
const button = document.getElementById("button");
const tbody = document.getElementById("tbody");
const form = document.getElementById("form");
function validate(name) {
  if (!name.value) {
    alert("Todo kiritish shart");
    name.focus();
    return false;
  }
  return true;
}

function getData() {
  let data = [];
  if (localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
  }
  return data;
}
button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isValid = validate(name);
    if (isValid) {
      let todo = {
        name: name.value,
        status: "Todo",
        id: Date.now(),
      };
      //   console.log(todo);
      let todos = getData();
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      form.reset();
      //   window.location.reload()
      let tr = creatRow(todo, todos.length + 1);
      tbody.innerHTML += tr;
    }
  });

function creatRow(todo, index = +1) {
  //   let index = 0;
  return `  <tr>    
            <td>Index</td>
            <td>${todo.name}</td>
            <td><button id="buton-todo">${todo.status}</button></td>
            <td id="edit"><i class="fa-regular fa-pen-to-square"></i></td>
            <td id="delet"><i class="fa-solid fa-trash-can"></i></td>
          </tr>`;
}
document.addEventListener("DOMContentLoaded", function () {
  let todos = getData();
  if (todos.length) {
    todos.forEach((todo, index) => {
      let tr = creatRow(todo, index + 1);
      tbody.innerHTML += tr;
    });
  }
});
const deletbutton = document.querySelectorAll("i.fa-solid fa-trash-can");
console.log(deletbutton);
