allTasks = [];

fetch('https://dummyjson.com/todos?limit=10&skip=10')
.then(res => res.json())
.then(data => {
  allTasks = data.todos;
  console.log(allTasks);
  fetchAllTasks(allTasks);
  
});

function newElement() {
  if(document.getElementById("myInput").value){
    fetchAllTasks([{ id: allTasks.length + 1, todo: document.getElementById("myInput").value,userId:130, completed: false }]);
    allTasks.push({ id: allTasks.length + 1, todo: document.getElementById("myInput").value,userId:130, completed: false });
    console.log(allTasks);
  }
}

function fetchAllTasks(toDoTasks){
const ul = document.getElementById("myUL");
  toDoTasks.forEach(task => {
    const li = document.createElement("span");
    li.innerHTML = `${task.userId} <br/>  ${task.todo} `;
    ul.appendChild(li);
  });
  document.getElementById("myInput").value = "";
}