import Task from "./Task"

export const Tasks = ({ arrayOfTasks, onDelete, onToggle }) => {
    return (
        <>
            {arrayOfTasks.map((taskObject) => (
                <Task key={taskObject.id} taskObject={taskObject} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
