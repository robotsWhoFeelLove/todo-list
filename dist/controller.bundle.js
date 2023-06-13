"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["controller"],{

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function controller(){
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

} /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udHJvbGxlcigpe1xuICAgIGxldCBwcm9qZWN0cz1bXTtcbiAgICBsZXQgdG9Eb0l0ZW1zPVtdO1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCAocHJvamVjdCx0b0RvSXRlbXMpe1xuICAgICAgICBjb25zdCBwcm9qID0ge1xuICAgICAgICAgICAgcHJvamVjdCA6IHByb2plY3QsXG4gICAgICAgICAgICB0b0RvSXRlbXMgOiB0b0RvSXRlbXNcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qKTt9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0RvICh0aXRsZSxkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgY29uc3QgdG9EbyA9IHtcbiAgICAgICAgICAgIHRpdGxlIDogdGl0bGUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHk6cHJpb3JpdHlcbiAgICAgICAgfVxuICAgICAgICB0b0RvSXRlbXMucHVzaCh0b0RvKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb0l0ZW1zKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFzc2lnblRvRG8ocHJvamVjdCx0b0RvSXRlbSl7XG4gICAgICAgIGxldCB0b0RvSW5kZXggPSB0b0RvSXRlbXMuZmluZEluZGV4KG9iaiA9PiBvYmoudGl0bGUgPT0gdG9Eb0l0ZW0pO1xuICAgICAgICBsZXQgcHJvakluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KG9iaiA9PiBvYmoucHJvamVjdCA9PSBwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHNbcHJvakluZGV4XS50b0RvSXRlbXMucHVzaCh0b0RvSXRlbXNbdG9Eb0luZGV4XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW3Byb2pJbmRleF0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVUb0RvKHByb2plY3QsdG9Eb0l0ZW0pe1xuICAgICAgICBsZXQgdG9Eb0luZGV4ID0gdG9Eb0l0ZW1zLmZpbmRJbmRleChvYmogPT4gb2JqLnRpdGxlID09IHRvRG9JdGVtKTtcbiAgICAgICAgbGV0IHByb2pJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChvYmogPT4gb2JqLnByb2plY3QgPT0gcHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzW3Byb2pJbmRleF0udG9Eb0l0ZW1zLnNwbGljZSh0b0RvSXRlbXNbdG9Eb0luZGV4XSwxKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbcHJvakluZGV4XSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJvamVjdChvbGRQcm9qLG5ld1Byb2osdG9Eb0l0ZW0pe1xuICAgICAgICByZW1vdmVUb0RvKG9sZFByb2osdG9Eb0l0ZW0pO1xuICAgICAgICBhc3NpZ25Ub0RvKG5ld1Byb2osdG9Eb0l0ZW0pO1xuXG4gICAgfVxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICAgICAgYWRkVG9EbyxcbiAgICAgICAgICAgIGFzc2lnblRvRG8sXG4gICAgICAgICAgICByZW1vdmVUb0RvLFxuICAgICAgICAgICAgY2hhbmdlUHJvamVjdCxcbiAgICAgICAgICAgIHByb2plY3RzXG4gICAgfVxuXG59IGV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=