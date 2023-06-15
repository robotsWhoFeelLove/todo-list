import './style.css';
// import controller from './controller';

const toDoItem = (title,dueDate,priority) => {
    controller.addToDo(title,dueDate,priority);
    return {
        title : title,
        dueDate : dueDate,
        priority : priority
    }
}

const project = (projectName) =>{
    let toDoItems = [];
    controller.addProject(projectName, toDoItems);
    return {
        project: projectName,
        toDoItems:[],
    }
}

const controller = (()=>{
    let projects =[];
    let toDoItems = [];
    if (getProj() != undefined){
        projects = getProj();
    } else {projects = []};
    if (getToDos() != undefined){
        toDoItems = getToDos();
    } else {toDoItems = []};

    function addProject (project,toDoItems){
        const proj = {
            project : project,
            toDoItems : toDoItems
        }
        projects.push(proj);
        console.log(proj);}

    function addToDo (title,dueDate,priority){
        const toDo = {
            title : title,
            dueDate: dueDate,
            priority:priority
        }
        toDoItems.push(toDo);
        saveAll();
        console.log(toDoItems)
    }

    function assignToDo(project,toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects[projIndex].toDoItems.push(toDoItems[toDoIndex]);
        saveAll();
        console.log(projects[projIndex]);
    }
    
    function removeToDo(project,toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects[projIndex].toDoItems.splice(toDoItems[toDoIndex],1);
        saveAll();
        console.log(projects[projIndex]);
    }

    function removeUnassigned(toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        toDoItems.splice(toDoIndex,1);
        saveAll();
    }

    function removeProject(project){
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects.splice(projIndex,1);
        saveAll();
    }

    function changeProject(oldProj,newProj,toDoItem){
        removeToDo(oldProj,toDoItem);
        assignToDo(newProj,toDoItem);
        saveAll();

    }

    function checkDueToday(){

    }
        return{
            addProject,
            addToDo,
            assignToDo,
            removeToDo,
            changeProject,
            removeUnassigned,
            removeProject,
            projects,
            toDoItems
    }

} )();

const viewEngine = (() => {
    // function allowDrop(e){
    //     e.preventDefault();
    // }
    // function drag(e){
    //     e.dataTransfer
    // }
    function cardBuild() {
        document.querySelector(".cards").innerHTML = "";
        document.querySelector(".sidebar").innerHTML = ""
        controller.projects.forEach((project)=>{
        const card = document.createElement("div");
        card.classList.add("card");
        const xOut = document.createElement("div");
        xOut.classList.add("x-out");
        xOut.textContent = "X";
        // card.addEventListener('dragenter', handleDragEnter);
        // card.addEventListener('dragleave', handleDragLeave);
        // card.addEventListener('drop', handleDrop);
        // card.item.setAttribute('ondrop', 'drop(e)');
        // card.item.setAttribute('ondragover', allowDrop(e));

        const proj = document.createElement("div");
        proj.classList.add("card-title");
        proj.textContent = project.project;

        card.appendChild(proj);
        card.appendChild(xOut);

        project.toDoItems.forEach((toDo)=>{

            const item = document.createElement("div");
            item.classList.add("to-do");
            item.setAttribute('draggable', true);
            const toDoText = document.createElement('div');
            toDoText.textContent = toDo.title
            const complete = document.createElement("input");
            complete.setAttribute('type', 'checkbox');
            const dueDate = document.createElement('div');
            dueDate.textContent= toDo.dueDate;
            if(toDo.priority) item.classList.add("priority");
            item.classList.add(checkStatus(toDo.dueDate));

            
            
            // item.addEventListener('dragstart', handleDragStart);
            // item.addEventListener('drop',handleDragEnd);
            // item.setAttribute('ondragstart', drag(e));
            // item.textContent = toDo.title
            item.appendChild(toDoText);
            item.appendChild(dueDate);
            item.appendChild(complete);
            

            card.appendChild(item)
        })

        document.querySelector(".cards").appendChild(card);
 
    }
    ) 
    controller.toDoItems.forEach((item)=>{
        if(!JSON.stringify(controller.projects).includes(item.title)){
            newToDo(item.title);
        }

    })
}

        function newToDo(item){
            // const toDo = document.createElement('div');
            // toDo.classList.add("to-do");
            // toDo.setAttribute('draggable', true);
            // toDo.textContent = item;
            // document.querySelector(".sidebar").appendChild(toDo)
            let toDoIndex = controller.toDoItems.findIndex(obj => obj.title == item);
            const toDo = document.createElement("div");
            toDo.classList.add("to-do");
            toDo.setAttribute('draggable', true);
            const toDoText = document.createElement('div');
            toDoText.textContent = item
            const complete = document.createElement("input");
            complete.setAttribute('type', 'checkbox');
            if(controller.toDoItems[toDoIndex].priority) toDo.classList.add("priority")
            const dueDate = document.createElement('div');
            dueDate.textContent= controller.toDoItems[toDoIndex].dueDate;
           toDo.classList.add(checkStatus(dueDate.textContent));
            
            // item.addEventListener('dragstart', handleDragStart);
            // item.addEventListener('drop',handleDragEnd);
            // item.setAttribute('ondragstart', drag(e));
            // item.textContent = toDo.title
            toDo.appendChild(toDoText);
            toDo.appendChild(dueDate);
            toDo.appendChild(complete);

               document.querySelector(".sidebar").appendChild(toDo);
        }
       

        function flattenToday(){
           let date = new Date();
            date = "_" + date.getFullYear() + (date.getMonth()+1) + date.getDate();
           date = date.replace("_","");
            console.log(date)
            return date;
        }

        function flattenDate(date){
            let flatDate = date.replace("-0","",2);
            flatDate = flatDate.replace("-","",2);
            return flatDate;
        }

        function checkStatus(dueDate){
            // const date = new Date();
            let today = flattenToday();        //(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate())
         
            // today = today.replaceAll("-","",2);
            let checkDate;
            if(dueDate){ 
                checkDate = flattenDate(dueDate)
            }
            if(today == checkDate-1) return("yellow");
            if(today > checkDate) return("red");
            if(today <  checkDate-1) return("green");
            if(today == checkDate) {
                // dueToday = dueToday +1;
                // document.querySelector(".due").textContent = dueToday;
                return("dueToday")
            }
        }

        return{
            cardBuild,
            newToDo,
            checkStatus,
            // dueToday
        }
 } )();

//  card.addEventListener('dragenter', handleDragEnter);
//  card.addEventListener('dragleave', handleDragLeave);
//  card.addEventListener('drop', handleDrop);

 (function dragDrop() {
 let dragItem, listener 
 
 dragItem = null;

 listener = document.addEventListener;


 listener('dragenter',function handleDragEnter(e){
    
    e.target.classList.add('over');
 });
 
 listener('dragleave',function handleDragLeave (e){
    e.target.classList.remove('over');
 });

 listener('dragend',function handleDragEnd (e){
    e.target.classList.remove('over');
 });

 listener('dragover', function(e){
    // e.target.classList.toggle('over');
    // e.target.classList.toggle('over');
    return e.preventDefault();
 });

 listener('dragstart',function handleDragStart(e){
    dragItem = e.target
    // e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('text/html',this.outerHTML);
    console.log(dragItem);
    return dragItem;
 });

 listener('drop',function handleDrop(e){
    e.preventDefault();
    console.log(e.target.className);
    if(e.target.className == "card over") {
        console.log("dropzone");
        console.log("old project is "+dragItem.parentNode.textContent + " new proj is " + e.target.textContent + " todo is " +dragItem.textContent);
        if (dragItem.parentNode.className == "sidebar"){
            controller.assignToDo(e.target.firstElementChild.textContent,dragItem.firstElementChild.textContent);
            dragItem.parentNode.removeChild(dragItem);
            e.target.classList.remove("over")
            return e.target.appendChild(dragItem);
        } else {
        // parentText(dragItem.parentNode);
        // parentText(e.target);
        controller.changeProject(dragItem.parentNode.firstElementChild.textContent,
            e.target.firstElementChild.textContent,dragItem.firstElementChild.textContent);
        dragItem.parentNode.removeChild(dragItem);
        e.target.classList.remove("over")
        return e.target.appendChild(dragItem);
        } 
    } else {
        if (e.target.className == "sidebar over"){
            controller.removeToDo(dragItem.parentNode.firstElementChild.textContent,
            dragItem.firstElementChild.textContent);
        dragItem.parentNode.removeChild(dragItem);
        e.target.classList.remove("over")
        return e.target.appendChild(dragItem);
        }
    }
 });

})();

document.querySelector(".sidebar").onclick = function(ev){
    if(ev.target.parentNode.classList.contains("to-do")&& ev.target.checked){
        controller.removeUnassigned(ev.target.parentNode.firstElementChild.textContent);
        viewEngine.cardBuild();
        
    }
}

document.querySelector(".cards").onclick = function(ev){
    if(ev.target.classList.contains("x-out")){
        controller.removeProject(ev.target.parentNode.firstElementChild.textContent);
        ev.target.parentNode.classList.add("push");
        setTimeout(()=>{
            viewEngine.cardBuild()
        },400);
    }
    if(ev.target.parentNode.classList.contains("to-do") && ev.target.checked){
        console.log(ev.target + ev.target.parentNode.textContent + ev.target.parentNode.parentNode.textContent)
        controller.removeToDo(ev.target.parentNode.parentNode.firstElementChild.textContent,ev.target.parentNode.firstElementChild.textContent);
        controller.removeUnassigned(ev.target.parentNode.firstElementChild.textContent); 
        ev.target.parentNode.classList.add("shake")
        setTimeout(()=>{
            viewEngine.cardBuild()
        }, 300);
    }
}


// function parentText(el){
//     let text = "";
// for (let i = 0; i < el.childNodes.length; i++) {
//     let node = el.childNodes[i];
//     console.log({node})
//     if (node.nodeType  === Node.TEXT_NODE) {
//         text += node.data;
//     }
// }
// console.log("parent text is" +text);
// }

// project("Daily Things");

// project("This Week");

// toDoItem("Get groceries","6/17/24","high");

// controller.assignToDo("Daily Things","Get groceries");

// controller.changeProject("Daily Things","This Week","Get groceries");

viewEngine.cardBuild();

let newProj = document.querySelector(".nav>.new-project")
newProj.addEventListener("click", ()=>showThing(".add-project")
)

let newToDo = document.querySelector(".nav>.new-todo")
newToDo.addEventListener("click", ()=>showThing(".add-to-do")
)

function showThing(thing){
    document.querySelector(thing).classList.toggle("hidden");
}

document.getElementById("submit-project").addEventListener("click", function(){
    project(document.querySelector("#project-name",).value);
    showThing(".add-project");
    viewEngine.cardBuild();
});

document.getElementById("submit-to-do").addEventListener("click", function(){
    toDoItem(document.querySelector("#to-do-name").value,
            document.querySelector("#to-do-date").value,
            document.querySelector("#priority").checked)
            viewEngine.checkStatus(document.querySelector("#to-do-date").value);
    showThing(".add-to-do");
    viewEngine.cardBuild();
    // viewEngine.newToDo(document.querySelector("#to-do-name").value);
});

// document.addEventListener('DOMContentLoaded', (ev)=>{
//     console.log(ev); 
//     function handleDragStart(e){
//         this.style.opacity = .4;
//     }


// let items = document.querySelectorAll('.to-do');
// items.forEach(function(item){
//     item.addEventListener('dragstart',handleDragStart());
// })
// })

function saveAll (){
    localStorage.clear();
    let f = JSON.stringify(controller.projects);
    console.log(f);
    window.localStorage.setItem("projects", f);
    let g = JSON.stringify(controller.toDoItems);
    console.log(g);
    if (g != "undefined")
    window.localStorage.setItem("toDoItems", g)
}
function getProj (){
    let f = window.localStorage.getItem("projects");
   if (f) return JSON.parse(f);
}
function getToDos (){
    let g = window.localStorage.getItem("toDoItems");
   if (g && g != "undefined") return JSON.parse(g);
}