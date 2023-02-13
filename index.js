let userTasks = []
const titleEl = document.getElementById("title-el")
const descriptionEl = document.getElementById("description-el")
const addTaskBtn = document.getElementById("add-task-btn")
const newTaskBtn = document.getElementById("new-task-btn")
const taskForm = document.querySelector(".task-form")
const taskEl = document.getElementById("tasks-el")
const saveSnip = document.querySelector(".save-snip")





newTaskBtn.addEventListener("click", function(){
    if(taskForm){
        taskForm.classList.remove("hide")
    }


})

addTaskBtn.addEventListener("click", function(event) {
    event.preventDefault()
    
    // display the last task first
    userTasks.unshift({
        title: titleEl.value, 
        description: descriptionEl.value
        })
    
    // clear fields 
    titleEl.value = ""
    descriptionEl.value = ""
    
    // hide task input form
    if(taskForm){    
        taskForm.classList.add("hide")
        renderTasks()
    }
    
   
    
})

function renderTasks() {
    let taskList = ""
    let taskId = 0
    let deleteBtn = document.querySelectorAll(".delete-task")
    
    userTasks.forEach((task, id) => {
        

        taskId = id
        
        taskList += `
                <div class="task-block">
                    <h2 class="task-header-title">${task.title}</h2>
                    <p class="task-description">${task.description}</p>
                    <div class="task-status">
                        <button class="save-snip">Save</button>
                        <button class="delete-task">Delete</button>
                    </div>
                </div>
            ` 
              
    })
    

    taskEl.innerHTML = taskList  

    
}

