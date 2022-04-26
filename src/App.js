import "./App.css"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTaskForm from "./components/AddTaskForm"
import { useState } from "react"

const taskText = "Task scheduler"

// create button that hides or reveals drum img

// create input form that saves "username" to state date
// click event triggers usernameVerifier()
// if it passes, set input to state data
// if not, error state, try again

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [arrayOfTasks, setTasks] = useState([
        {
            id: 1,
            text: "buy bread",
            day: "05/01/2022",
            reminder: true,
        },
        {
            id: 2,
            text: "eat bread",
            day: "05/01/2022",
            reminder: true,
        },
        {
            id: 3,
            text: "add buy bread task",
            day: "05/01/2022",
            reminder: true,
        },
    ])

    // add task
    const addTask = (taskObject) => {
        const id = arrayOfTasks.length + 1
        const newTask = { id, ...taskObject }
        console.log(id)
        setTasks([...arrayOfTasks, newTask])
    }

    // task deleter
    const deleteTask = (id) => {
        console.log(id, " deleted")
        setTasks(arrayOfTasks.filter((taskObject) => taskObject.id !== id))
    }

    // task reminder toggle
    const toggleReminder = (id) => {
        setTasks(
            arrayOfTasks.map((taskObject) =>
                taskObject.id === id ? { ...taskObject, reminder: !taskObject.reminder } : taskObject
            )
        )
    }

    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTaskForm onAdd={addTask} />}
            <h2>print out {taskText}</h2>
            <h2>is conditional true? {taskText ? "yes" : "no"}</h2>
            {arrayOfTasks.length > 0 ? (
                <Tasks arrayOfTasks={arrayOfTasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                "No current tasks"
            )}
        </div>
    )
}

Header.defaultProps = {
    title: "placeholder title",
}

export default App
