export const Tasks = ({ arrayOfTasks }) => {
    return (
        <>
            {arrayOfTasks.map((taskObject) => (
                <h3 key={taskObject.id}>{taskObject.text}</h3>
            ))}
        </>
    )
}

export default Tasks
