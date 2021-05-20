import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'
//import React from 'react'

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
    //console.log('swag',tasksList.map( (task) => task.id == id ? task : task ))
    //console.log(tasksList.map((task) => {...task, reminder: !task.reminder }))
    setTasks(tasksList.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))

  }
      /*{tasksList.length > 0 ? (<Tasks tasksList={tasksList} onDelete={deleteTask}/>) : ('No Task') } */

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask) } showAdd={showAddTask}/> 
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasksList={tasksList} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}


//Using class
// class App extends React.Component{
//   render(){
//     return <h1>From a class</h1>
//   }
// }

export default App;


