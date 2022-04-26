import { FaTimes } from "react-icons/fa"

export const Task = ({ taskObject, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${taskObject.reminder ? "reminderTrue" : "reminderFalse"}`}
            onDoubleClick={() => onToggle(taskObject.id)}
        >
            <h3>
                {taskObject.text}
                <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(taskObject.id)} />
            </h3>
            <p>{taskObject.day}</p>
        </div>
    )
}

export default Task
