(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsZHVlRGF0ZSxwcmlvcml0eSkgPT4ge1xuICAgIGNvbnRyb2xsZXIuYWRkVG9Ebyh0aXRsZSxkdWVEYXRlLHByaW9yaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSA6IHRpdGxlLFxuICAgICAgICBkdWVEYXRlIDogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHkgOiBwcmlvcml0eVxuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT57XG4gICAgbGV0IHRvRG9JdGVtcyA9IFtdO1xuICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0TmFtZSwgdG9Eb0l0ZW1zKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0OiBwcm9qZWN0TmFtZSxcbiAgICAgICAgdG9Eb0l0ZW1zOltdLFxuICAgIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9ICgoKT0+e1xuICAgIGxldCBwcm9qZWN0cz1bXTtcbiAgICBsZXQgdG9Eb0l0ZW1zPVtdO1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCAocHJvamVjdCx0b0RvSXRlbXMpe1xuICAgICAgICBjb25zdCBwcm9qID0ge1xuICAgICAgICAgICAgcHJvamVjdCA6IHByb2plY3QsXG4gICAgICAgICAgICB0b0RvSXRlbXMgOiB0b0RvSXRlbXNcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qKTt9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0RvICh0aXRsZSxkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgY29uc3QgdG9EbyA9IHtcbiAgICAgICAgICAgIHRpdGxlIDogdGl0bGUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHk6cHJpb3JpdHlcbiAgICAgICAgfVxuICAgICAgICB0b0RvSXRlbXMucHVzaCh0b0RvKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb0l0ZW1zKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFzc2lnblRvRG8ocHJvamVjdCx0b0RvSXRlbSl7XG4gICAgICAgIGxldCB0b0RvSW5kZXggPSB0b0RvSXRlbXMuZmluZEluZGV4KG9iaiA9PiBvYmoudGl0bGUgPT0gdG9Eb0l0ZW0pO1xuICAgICAgICBsZXQgcHJvakluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KG9iaiA9PiBvYmoucHJvamVjdCA9PSBwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHNbcHJvakluZGV4XS50b0RvSXRlbXMucHVzaCh0b0RvSXRlbXNbdG9Eb0luZGV4XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW3Byb2pJbmRleF0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVUb0RvKHByb2plY3QsdG9Eb0l0ZW0pe1xuICAgICAgICBsZXQgdG9Eb0luZGV4ID0gdG9Eb0l0ZW1zLmZpbmRJbmRleChvYmogPT4gb2JqLnRpdGxlID09IHRvRG9JdGVtKTtcbiAgICAgICAgbGV0IHByb2pJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChvYmogPT4gb2JqLnByb2plY3QgPT0gcHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzW3Byb2pJbmRleF0udG9Eb0l0ZW1zLnNwbGljZSh0b0RvSXRlbXNbdG9Eb0luZGV4XSwxKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbcHJvakluZGV4XSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJvamVjdChvbGRQcm9qLG5ld1Byb2osdG9Eb0l0ZW0pe1xuICAgICAgICByZW1vdmVUb0RvKG9sZFByb2osdG9Eb0l0ZW0pO1xuICAgICAgICBhc3NpZ25Ub0RvKG5ld1Byb2osdG9Eb0l0ZW0pO1xuXG4gICAgfVxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICAgICAgYWRkVG9EbyxcbiAgICAgICAgICAgIGFzc2lnblRvRG8sXG4gICAgICAgICAgICByZW1vdmVUb0RvLFxuICAgICAgICAgICAgY2hhbmdlUHJvamVjdCxcbiAgICAgICAgICAgIHByb2plY3RzXG4gICAgfVxuXG59ICkoKTtcblxuY29uc3Qgdmlld0VuZ2luZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2FyZEJ1aWxkKCkge2NvbnRyb2xsZXIucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2ouY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIik7XG4gICAgICAgIHByb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3Q7XG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qKTtcblxuICAgICAgICBwcm9qZWN0LnRvRG9JdGVtcy5mb3JFYWNoKCh0b0RvKT0+e1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJ0by1kb1wiKTtcbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSB0b0RvLnRpdGxlXG5cbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpLmFwcGVuZENoaWxkKGNhcmQpO1xuIFxuICAgIH1cbiAgICApIFxuXG59XG5yZXR1cm57XG4gICAgY2FyZEJ1aWxkXG59XG4gfSApKCk7XG5cbnByb2plY3QoXCJEYWlseSBUaGluZ3NcIik7XG5cbnByb2plY3QoXCJUaGlzIFdlZWtcIik7XG5cbnRvRG9JdGVtKFwiR2V0IGdyb2Nlcmllc1wiLFwiNi8xNy8yNFwiLFwiaGlnaFwiKTtcblxuY29udHJvbGxlci5hc3NpZ25Ub0RvKFwiRGFpbHkgVGhpbmdzXCIsXCJHZXQgZ3JvY2VyaWVzXCIpO1xuXG5jb250cm9sbGVyLmNoYW5nZVByb2plY3QoXCJEYWlseSBUaGluZ3NcIixcIlRoaXMgV2Vla1wiLFwiR2V0IGdyb2Nlcmllc1wiKTtcblxudmlld0VuZ2luZS5jYXJkQnVpbGQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=