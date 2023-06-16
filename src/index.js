import './style.css';
import sticky from './sticky.png';
import _, { forEach } from 'lodash';
// import controller from './controller';

document.querySelector(".header>div").addEventListener("click",(ev=>{
    localStorage.clear()
    console.log("cleared");
}))

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

    document.querySelector(".home").addEventListener("click",(e)=>{
        console.log(projects);
        console.log(toDoItems);
    });

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
        let projIndex = projects.findIndex(obj => obj.project == project);
        console.log(projIndex);
        let toDoIndex = projects[projIndex].toDoItems.findIndex(obj => obj.title == toDoItem);
        console.log({toDoIndex})
        projects[projIndex].toDoItems.splice(toDoIndex,1);
    }
        // let i =0;
        // projects.forEach( 
        //     toDoItems.forEach((item)=>{
        //     if(item.title == toDoItem){
        //         let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem)
        //         projects[i.toDoItems].splice(toDoItems[toDoIndex],1)
        //     }}
        //     ))}
        
        // let toDoI = projects.find(obj => obj.title == toDoItem);
        // let projIndex = projects.findIndex(obj => obj.project == project);
    //     console.log(`Removing toDo: ${toDoItems[toDoIndex]} at Index ${toDoIndex} \n from Project: ${projects[projIndex]} at Index ${projIndex}`)
    //     projects[projIndex].toDoItems.splice(toDoItems[toDoIndex],1);
    //     _.omitBy(projects, _.isNil);
    //     saveAll();
    //     console.log(projects[projIndex]);
    // }

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

    // function checkDueToday(){

    // }
    // function logToDo() {
    //     const toDoString = JSON.stringify(toDoItems);
    //    console.log(toDoString);
        
    // }
    // logToDo();
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
    
    const stickyNote = new Image();
    stickyNote.src = sticky;
    document.querySelector(".header").appendChild(stickyNote);
    function cardBuild() {
        let handledToDos = [];
        document.querySelector(".cards").innerHTML = "";
        document.querySelector(".sidebar").innerHTML = ""
        const cleanProj = _.omitBy(controller.projects, _.isNil)
        console.log(cleanProj)
        // cleanProj.forEach((project)=>{
      
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
            handledToDos.push(toDo);
            const item = document.createElement("div");
            item.classList.add("to-do");
            item.setAttribute('draggable', true);
            const toDoText = document.createElement('div');
            if(toDo.title)toDoText.textContent = toDo.title;
            const complete = document.createElement("input");
            complete.setAttribute('type', 'checkbox');
            const dueDate = document.createElement('div');
            dueDate.textContent= toDo.dueDate.substr(5);
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
    console.log({handledToDos});
    controller.toDoItems.forEach((item)=>{
       if(!_.find(handledToDos,{"title": item.title})){
        //     if(!project.toDoItems.includes(item)){console.log("Unassigned to do found: "+item.title)}
        // })

        // if(!_.find(controller.projects,{'toDoItems': item})){console.log("item found")}
        // if(!JSON.stringify(controller.projects).includes(item.title)){
            newToDo(item.title);}
        }

    )
}

        function newToDo(item){
            // const toDo = document.createElement('div');
            // toDo.classList.add("to-do");
            // toDo.setAttribute('draggable', true);
            // toDo.textContent = item;
            // document.querySelector(".sidebar").appendChild(toDo)
            let toDoIndex = controller.toDoItems.findIndex(obj => obj.title === item);
            const toDo = document.createElement("div");
            toDo.classList.add("to-do");
            toDo.setAttribute('draggable', true);
            const toDoText = document.createElement('div');
            toDoText.textContent = item
            const complete = document.createElement("input");
            complete.setAttribute('type', 'checkbox');
            if(controller.toDoItems[toDoIndex].priority) toDo.classList.add("priority")
            const dueDate = document.createElement('div');
            dueDate.textContent= controller.toDoItems[toDoIndex].dueDate.substr(5);
           toDo.classList.add(checkStatus(controller.toDoItems[toDoIndex].dueDate));
            
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
            if(today == checkDate) return("due-today");
            if(today == checkDate-1) return("due-tomorrow");
            if(today > checkDate-7) return("this-week");
            if(today <  checkDate-6) return("green");
            if(today > checkDate) return("over-due");
            
        }
        // function addClass (checker,someClass){
        //     checker.forEach((thing)=>
        //     thing.classList.Add(someClass))
        // }
        
        function checkDue(todayPlusMinus,thing){
            console.log(flattenDate(thing.dueDate)-todayPlusMinus);
            console.log(flattenToday());
              return(flattenDate(thing.dueDate)-todayPlusMinus<flattenToday())
               }

    //     function highlighter(int){
    //         controller.toDoItems.forEach((toDo)=>{
    //         console.log(toDo.title + " is due? " + checkDue(int,toDo))
    //         if(checkDue(int,toDo)){console.log(toDo.title +" matched highlight");
    //             document.querySelectorAll(".to-do").forEach((el)=>{
    //                 console.log(el.textContent + el.firstElementChild.textContent);
    //         if (el.firstElementChild.textContent == toDo.title){
    //             el.classList.add("pulse");
    //         }

    //             })
    //     }}) 
    // }
    // highlighter(1);

        
    function dueToday() {document.querySelectorAll(".due-today").forEach(el=>{
        console.log(el)
        el.classList.add("pulse")
    })  }
    dueToday();
            
        

        return{
            cardBuild,
            newToDo,
            checkStatus,
            checkDue
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
    if(e.target.classList.contains("card")) {
        console.log("dropzone");
        console.log("old project is "+dragItem.parentNode.textContent + " new proj is " + e.target.textContent + " todo is " +dragItem.textContent);
        if (dragItem.parentNode.className == "sidebar"){
            console.log(`assignToDo: ${e.target.firstChild.textContent} \n ${dragItem.firstChild.textContent}`)
            controller.assignToDo(e.target.firstChild.textContent,dragItem.firstChild.textContent);
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
        if (e.target.classList.contains("sidebar")){
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
        controller.removeUnassigned(ev.target.parentNode.firstChild.textContent);
        viewEngine.cardBuild();
        
    }
}

document.querySelector(".due").onclick = function(ev){
    console.log("due clicked");
    const list = document.querySelectorAll(".due-today");
    console.log(list);
    list.forEach((e)=>{
        console.log(e);
        e.classList.toggle("pulse");
    })
        
    }


document.querySelector(".cards").onclick = function(ev){
    ev.stopPropagation();
    if(ev.target.classList.contains("x-out")){
        controller.removeProject(ev.target.parentNode.firstChild.textContent);
        ev.target.parentNode.classList.add("push");
        setTimeout(()=>{
            viewEngine.cardBuild();
            console.log("Removed Project " + ev.target.parentNode.firstChild.textContent);
        },400);
    }
    if(ev.target.parentNode.classList.contains("to-do") && ev.target.checked){
        console.log("removing toDo: + "+ev.target.parentNode.firstChild.textContent + "\n From Project "+ev.target.parentNode.parentNode.firstChild.textContent)
        controller.removeToDo(ev.target.parentNode.parentNode.firstChild.textContent,ev.target.parentNode.firstChild.textContent);
        console.log("removing to Do: "+ ev.target.parentNode.firstChild.textContent + " from to do array");
        controller.removeUnassigned(ev.target.parentNode.firstChild.textContent); 
        ev.target.parentNode.classList.add("shake")
        setTimeout(()=>{
            viewEngine.cardBuild()
        }, 300);
    }
}




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

document.querySelector(".new-project").addEventListener('submit', function(){
    const projName = document.querySelector("#project-name");
    if(_.find(controller.projects,{'project': projName.value.trim()})){
        projName.setCustomValidity("This project already exists!")
    } else {
        projName.setCustomValidity("")
    project(projName.value.trim());
    showThing(".add-project");
    viewEngine.cardBuild();
}});

document.querySelector('.new-to-do').addEventListener('submit', function(){
    const toDoName = document.querySelector("#to-do-name");
    if(_.find(controller.toDoItems,{'title': toDoName.value.trim()})){
        toDoName.setCustomValidity("This To Do already exists!");
    } else {
        toDoName.setCustomValidity("");
    toDoItem(document.querySelector("#to-do-name").value.trim(),
            document.querySelector("#to-do-date").value,
            document.querySelector("#priority").checked)
            viewEngine.checkStatus(document.querySelector("#to-do-date").value);
    showThing(".add-to-do");
    viewEngine.cardBuild();
    }
    // viewEngine.newToDo(document.querySelector("#to-do-name").value);
});

// document.querySelector('.new-to-do').addEventListener('submit',(ev) => {console.log(ev.target)})

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




// const toDos = new Set(controller.toDoItems.map(toDo=> toDo.title))
// function findProj() { 
//    if(_.find(controller.projects,{'project': 'Test Project'})){
//     console.log("proj found")
//    } else {
//     console.log("no proj found")
//    }
// }
// findProj();

document.querySelector("#to-do-name").addEventListener("change",(e)=>{
    e.target.setCustomValidity("");
})
document.querySelector("#project-name").addEventListener("change",(e)=>{
    e.target.setCustomValidity("");
})


