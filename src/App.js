import { ToDoContext } from "./contexts/ToDoContext";
import useFetch from "./hooks/useFetch";
import './App.css'
import { ToDoList } from "./components/ToDo/ToDoList";
import useCrud from "./hooks/useCrud";
import CreateTask from "./components/CreateTask";
import { Spinner } from "./components/Spinner/Spinner";

function App() {
	const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', []);
	const {createTodo, updateTodo, removeToDo} = useCrud();

	const createNewTodo = async (newTask) => {
		const createdTask = await createTodo(newTask);
		setTasks(state => [
			...state,
			createdTask,
		]);
	};

	const toggleTodoHandler = async (todo) => {
		const updatedTask = { ...todo, isCompleted: !todo.isCompleted };

		await updateTodo(todo._id, updatedTask);

		setTasks(state => state.map(x => x._id == todo._id ? updatedTask : x))
	};

	const removeHandler = async (todoId) => {
		await removeToDo(todoId);

		setTasks(state => state.filter(x => x._id != todoId));
	}

	const editHandler = async (todo, newTitle) => {
		const updatedTask = { ...todo, title: newTitle }

		await updateTodo(todo._id, updatedTask);

		setTasks(state => state.map(x => x._id == todo._id ? updatedTask : x))
	}


  return (
	<ToDoContext.Provider value={{toggleTodoHandler, removeHandler, editHandler}}>
		<div>
			<div id="myDIV" className="header">
				<h2>My To Do List</h2>
				<CreateTask createNewTodo={createNewTodo} />			
			</div>

			<main>
				{isLoading
					? <Spinner /> 
					: <ToDoList tasks={tasks} />
				}
			</main>
				
		</div>
	</ToDoContext.Provider>
  );
}

export default App;
