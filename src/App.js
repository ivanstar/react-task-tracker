import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasksList, setTasks] = useState ([
  ])
  //add task
  const addTask = (task) => {
    console.log('swag',task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasksList,newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    console.log('delete', id);
    console.log(tasksList.filter((task) => task.id !== id))
    setTasks(tasksList.filter((task) => task.id !== id ))
  }


  //Toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasksList.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))

  }


  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask) } showAdd={showAddTask}/> 
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasksList={tasksList} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;


