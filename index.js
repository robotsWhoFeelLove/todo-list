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
    let projects=[];
    let toDoItems=[];

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
        console.log(toDoItems)
    }

    function assignToDo(project,toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects[projIndex].toDoItems.push(toDoItems[toDoIndex]);
        console.log(projects[projIndex]);
    }
    
    function removeToDo(project,toDoItem){
        let toDoIndex = toDoItems.findIndex(obj => obj.title == toDoItem);
        let projIndex = projects.findIndex(obj => obj.project == project);
        projects[projIndex].toDoItems.splice(toDoItems[toDoIndex],1);
        console.log(projects[projIndex]);
    }

    function changeProject(oldProj,newProj,toDoItem){
        removeToDo(oldProj,toDoItem);
        assignToDo(newProj,toDoItem);

    }
        return{
            addProject,
            addToDo,
            assignToDo,
            removeToDo,
            changeProject,
            projects
    }

} )();

const viewEngine = (() => {
    function cardBuild() {controller.projects.forEach((project)=>{
        const card = document.createElement("div");
        card.classList.add("card");

        const proj = document.createElement("div");
        proj.classList.add("card-title");
        proj.textContent = project.project;

        card.appendChild(proj);

        project.toDoItems.forEach((toDo)=>{
            const item = document.createElement("div");
            item.classList.add("to-do");
            item.textContent = toDo.title

            card.appendChild(item)
        })

        document.querySelector(".cards").appendChild(card);
 
    }
    ) 

}
return{
    cardBuild
}
 } )();

project("Daily Things");

project("This Week");

toDoItem("Get groceries","6/17/24","high");

controller.assignToDo("Daily Things","Get groceries");

controller.changeProject("Daily Things","This Week","Get groceries");

viewEngine.cardBuild();