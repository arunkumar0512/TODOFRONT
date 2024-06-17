// import React , {useState , useEffect} from 'react'
// import axios from 'axios'
// import './App.css'
// import Addtask from './Components/Addtask'
// import Todolist from './Components/Todolist'
// import Updatetask from './Components/Updatetask'
// function App() {
//   const [todolist,setTodolist] = useState([])
//   const [tasktoUpdate , setTasktoUpdate] = useState({})
//   const [showPopup,setShowPopup] = useState(false)
//   useEffect(() => {
//     axios.get('http://localhost:8000/api/tasks').then(res => {
//       setTodolist(res.data)
//     }).catch(err => console.log(err))
//   },[])
//   const addTask = newTask => {
//     setTodolist([...todolist,newTask])
//   }
//   const taskComplete = task => {
//     const newList = [...todolist]
//     newList.forEach(item => {
//       if(item._id === task._id){
//         item.isComplete = task.isComplete
//       }
//     })
//     setTodolist(newList)
//   }
//   const removeTask = task => {
//     const newList = todolist.filter(item => !(item._id === task._id))
//     setTodolist(newList)
//   }
//   const updatetask = task => {
//     const newList = [...todolist]
//     newList.forEach(item => {
//       if(item._id === task._id){
//         item.todo = task.todo
//       }
//     })
//     setTodolist(newList)
//   }
//   return (
//     <div>
//       <Addtask addTask = {addTask}/>
//       <Todolist todolist = {todolist} taskComplete = {taskComplete} removeTask = {removeTask} tasktoUpdate = {task => setTasktoUpdate(task)} showPopup = {() => setShowPopup(!showPopup)}/>
//       {showPopup && <Updatetask task = {tasktoUpdate} updatetask = {updatetask} removePopup = {() => setShowPopup(!showPopup)}/>}
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';
// import Addtask from './Addtask';
// import Todolist from './Todolist';
// import Updatetask from './Updatetask';
import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Addtask from './Components/Addtask'
import Todolist from './Components/Todolist'
import Updatetask from './Components/Updatetask'




function App() {
    const [tasks, setTasks] = useState([]);
    const [taskToUpdate, setTaskToUpdate] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks')
            .then(res => setTasks(res.data))
            .catch(err => console.log(err));
    }, []);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
    };

    const tasktoUpdate = (task) => {
        setTaskToUpdate(task);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setTaskToUpdate(null);
    };

    return (
        <div className='app'>
            <Addtask addTask={addTask} />
            <Todolist
                initialTasks={tasks}
                tasktoUpdate={tasktoUpdate}
                showPopup={() => setShowPopup(true)}
            />
            {showPopup && (
                <Updatetask
                    taskToUpdate={taskToUpdate}
                    updateTask={updateTask}
                    closePopup={closePopup}
                />
            )}
        </div>
    );
}

export default App;


// function App() {
//     const [tasks, setTasks] = useState([]);
//     const [taskToUpdate, setTaskToUpdate] = useState(null);
//     const [showPopup, setShowPopup] = useState(false);

//     const addTask = (newTask) => {
//         setTasks([...tasks, newTask]);
//     };

//     const taskComplete = (updatedTask) => {
//         setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
//     };

//     const removeTask = (removedTask) => {
//         setTasks(tasks.filter(task => task._id !== removedTask._id));
//     };

//     const updateTask = (updatedTask) => {
//         setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
//     };

//     const tasktoUpdate = (task) => {
//         setTaskToUpdate(task);
//         setShowPopup(true);
//     };

//     const closePopup = () => {
//         setShowPopup(false);
//         setTaskToUpdate(null); // Clear the task to update when closing the popup
//     };

//     return (
//         <div className='app'>
//             <Addtask addTask={addTask} />
//             <Todolist
//                 todolist={tasks}
//                 taskComplete={taskComplete}
//                 removeTask={removeTask}
//                 tasktoUpdate={tasktoUpdate}
//                 showPopup={() => setShowPopup(true)}
//             />
//             {showPopup && (
//                 <Updatetask
//                     taskToUpdate={taskToUpdate}
//                     updateTask={updateTask}
//                     closePopup={closePopup}
//                 />
//             )}
//         </div>
//     );
// }

// export default App;
