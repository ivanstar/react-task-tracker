import Task from './Task'

const Tasks = ({ tasksList, onDelete, onToggle }) => {
    return (
        <>
            {tasksList.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}        
        </>
    )
}

export default Tasks
