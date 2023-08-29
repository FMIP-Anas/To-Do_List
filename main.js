

let mainColor = '#e44'


let form = document.createElement('form')
form.style.padding = '20px'
form.style.backgroundColor = '#eee'
form.style.width = '65%'
form.style.margin = 'auto'
form.style.display = 'flex'
form.style.gap = '20px'
let inpTask = document.createElement('input')
inpTask.style.flex = '1'
inpTask.style.height = '40px'
inpTask.style.border = 'none'
inpTask.style.fontSize = '20px'
inpTask.style.caretColor = mainColor
inpTask.style.backgroundColor = '#fbfbfb'
inpTask.onfocus = () => {inpTask.style.outline = 'none'}
inpTask.setAttribute('type','text')
let submit = document.createElement('input')
submit.style.width = '150px'
submit.style.border = 'none'
submit.style.backgroundColor = mainColor
submit.style.color = 'white'
submit.style.cursor = 'pointer'
submit.setAttribute('type','submit')
submit.setAttribute('value','Add Task')

form.appendChild(inpTask)
form.appendChild(submit)
document.body.appendChild(form)

let tasks = document.createElement('div')
tasks.style.padding = '20px'
tasks.style.backgroundColor = '#eee'
tasks.style.width = '65%'
tasks.style.margin = '20px auto 0'
tasks.style.display = 'flex'
tasks.style.flexDirection = 'column'
tasks.style.gap = '20px'
document.body.appendChild(tasks)


let tasksArr = JSON.parse(localStorage.getItem("Tasks"))
for (let i = 0; i < tasksArr.length; i++) {
    tasks.innerHTML += tasksArr[i]
}

form.onsubmit = function (eve) {
    eve.preventDefault()
    let newTask = document.createElement('div')
    if(inpTask.value == ''){
        return 0;
    }else {
    newTask.textContent = inpTask.value
    }
    newTask.style.padding = '10px'
    newTask.style.backgroundColor = '#fbfbfb'
    newTask.style.fontSize = '20px'
    newTask.style.display = 'flex'
    newTask.style.justifyContent = 'space-between'
    let delBtn = document.createElement('button')
    delBtn.style.width = '80px'
    delBtn.style.height = '25px'
    delBtn.style.backgroundColor = mainColor
    delBtn.style.border = 'none'
    delBtn.style.color = 'white'
    delBtn.style.cursor = 'pointer'
    delBtn.textContent = 'Delete'
    delBtn.setAttribute("onclick","rmv(this)")
    newTask.appendChild(delBtn)
    let newTaskStr = newTask.outerHTML
    tasks.appendChild(newTask)
    let tasksArr = JSON.parse(localStorage.getItem("Tasks"))
    tasksArr.push(newTaskStr)
    localStorage.setItem("Tasks",JSON.stringify(tasksArr))
}



function rmv(ele) {
    let task = ele.parentElement
    tasks.removeChild(task)
    let tasksArr = JSON.parse(localStorage.getItem("Tasks"))
    for (let i = 0; i < tasksArr.length; i++) {
        if (task.outerHTML == tasksArr[i]) {
            tasksArr.splice(i,1)
            localStorage.setItem("Tasks",JSON.stringify(tasksArr))
            return 0
        }
    }
}








