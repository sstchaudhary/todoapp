import express from 'express';
import {addTodo,getallTodos,toggleTodoDone,updatetodo,deletetodo}   from '../controller/todo-controller.js';
// import { getallTodos } from '../controller/todo-controller.js';
// import {toggleTodoDone} from '../controller/todo-controller.js';
const route=express.Router();

route.post('/todos',addTodo);
route.get('/todos',getallTodos);
route.get('/todos/:id',toggleTodoDone)
route.put('/todos/:id',updatetodo)
route.delete('/todos/:id',deletetodo)
export default route;


