// import './Todolist.css';
// import React from 'react';
// import CheckIcon from '@material-ui/icons/Check';
// import EditIcon from '@material-ui/icons/Edit';
// import CloseIcon from '@material-ui/icons/Close';
// import axios from 'axios';

// function Todolist(props) {
//     const taskComplete = task => {
//         axios.put(`http://localhost:8000/api/tasks/${task._id}`, {
//             _id: task._id,
//             todo: task.todo,
//             isComplete: !task.isComplete
//         })
//         .then(res => props.taskComplete(res.data))
//         .catch(err => console.log(err));
//     };

//     const removeTask = id => {
//         axios.delete(`http://localhost:8000/api/tasks/${id}`)
//         .then(res => props.removeTask(res.data))
//         .catch(err => console.log(err));
//     };

//     const todolist = props.todolist.map((task) => (
//         <li key={task._id}>
//             <div style={{ display: 'flex' }}>
//                 <CheckIcon 
//                     className={task.isComplete ? 'isComplete' : 'checkicon'} 
//                     onClick={() => taskComplete(task)}
//                 />
//                 <p 
//                     className={task.isComplete ? 'taskcomplete' : ''} 
//                     onClick={() => taskComplete(task)}
//                 >
//                     {task.todo}
//                 </p>
//             </div>
//             <div>
//                 <EditIcon 
//                     className='edit' 
//                     onClick={() => {
//                         props.tasktoUpdate(task);
//                         props.showPopup();
//                     }} 
//                 />
//                 <CloseIcon 
//                     className='close' 
//                     onClick={() => removeTask(task._id)} 
//                 />
//             </div>
//         </li>
//     ));

//     return (
//         <div className='tasklist'>
//             <ul>
//                 {todolist}
//             </ul>
//         </div>
//     );
// }

// export default Todolist;





// import './Todolist.css';
// import React from 'react';
// import CheckIcon from '@material-ui/icons/Check';
// import EditIcon from '@material-ui/icons/Edit';
// import CloseIcon from '@material-ui/icons/Close';
// import axios from 'axios';

// function Todolist(props) {
//     const taskComplete = (task) => {
//         axios.put(`http://localhost:8000/api/tasks/${task._id}`, {
//             _id: task._id,
//             todo: task.todo,
//             isComplete: !task.isComplete
//         })
//         .then(res => props.taskComplete(res.data))
//         .catch(err => console.log(err)); // Add proper error handling
//     };

//     const removeTask = (id) => {
//         axios.delete(`http://localhost:8000/api/tasks/${id}`)
//         .then(res => props.removeTask(res.data))
//         .catch(err => console.log(err)); // Add proper error handling
//     };

//     const todolist = props.todolist.map((task) => (
//         <li key={task._id}>
//             <div className="task-item">
//                 <CheckIcon 
//                     className={task.isComplete ? 'icon isComplete' : 'icon checkicon'} 
//                     onClick={() => taskComplete(task)}
//                 />
//                 <p 
//                     className={task.isComplete ? 'taskcomplete' : ''} 
//                     onClick={() => taskComplete(task)}
//                 >
//                     {task.todo}
//                 </p>
//             </div>
//             <div className="task-actions">
//                 <EditIcon 
//                     className='icon edit' 
//                     onClick={() => {
//                         props.tasktoUpdate(task);
//                         props.showPopup();
//                     }} 
//                 />
//                 <CloseIcon 
//                     className='icon close' 
//                     onClick={() => removeTask(task._id)} 
//                 />
//             </div>
//         </li>
//     ));

//     return (
//         <div className='tasklist'>
//             <ul>
//                 {todolist}
//             </ul>
//         </div>
//     );
// }

// export default Todolist;

// import React from 'react';
// import './Todolist.css';
// import CheckIcon from '@material-ui/icons/Check';
// import EditIcon from '@material-ui/icons/Edit';
// import CloseIcon from '@material-ui/icons/Close';
// import axios from 'axios';

// function Todolist(props) {
//     const taskComplete = (task) => {
//         axios.put(`http://localhost:8000/api/tasks/${task._id}`, {
//             _id: task._id,
//             todo: task.todo,
//             isComplete: !task.isComplete
//         })
//         .then(res => props.taskComplete(res.data))
//         .catch(err => console.log(err));
//     };

//     const removeTask = (id) => {
//         axios.delete(`http://localhost:8000/api/tasks/${id}`)
//         .then(res => props.removeTask(res.data))
//         .catch(err => console.log(err));
//     };

//     const todolist = props.todolist.map((task) => (
//         <li key={task._id}>
//             <div className="task-item">
//                 <CheckIcon 
//                     className={task.isComplete ? 'icon isComplete' : 'icon checkicon'} 
//                     onClick={() => taskComplete(task)}
//                 />
//                 <p 
//                     className={task.isComplete ? 'taskcomplete' : ''} 
//                     onClick={() => taskComplete(task)}
//                 >
//                     {task.todo}
//                 </p>
//             </div>
//             <div className="task-actions">
//                 <EditIcon 
//                     className='icon edit' 
//                     onClick={() => {
//                         props.tasktoUpdate(task);
//                         props.showPopup();
//                     }} 
//                 />
//                 <CloseIcon 
//                     className='icon close' 
//                     onClick={() => removeTask(task._id)} 
//                 />
//             </div>
//         </li>
//     ));

//     return (
//         <div className='tasklist'>
//             <ul>
//                 {todolist}
//             </ul>
//         </div>
//     );
// }

// export default Todolist;

import React, { useState, useEffect } from 'react';
import './Todolist.css';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

function Todolist({ initialTasks, tasktoUpdate, showPopup }) {
    const [tasks, setTasks] = useState(initialTasks);

    useEffect(() => {
        setTasks(initialTasks);
    }, [initialTasks]);

    const taskComplete = (task) => {
        axios.put(`http://localhost:8000/api/tasks/${task._id}`, {
            _id: task._id,
            todo: task.todo,
            isComplete: !task.isComplete
        })
        .then(res => {
            setTasks(tasks.map(t => t._id === task._id ? res.data : t));
        })
        .catch(err => console.log(err));
    };

    const removeTask = (id) => {
        axios.delete(`http://localhost:8000/api/tasks/${id}`)
        .then(() => {
            setTasks(tasks.filter(task => task._id !== id));
        })
        .catch(err => console.log(err));
    };

    const todolist = tasks.map((task) => (
        <li key={task._id}>
            <div className="task-item">
                <CheckIcon 
                    className={task.isComplete ? 'icon isComplete' : 'icon checkicon'} 
                    onClick={() => taskComplete(task)}
                />
                <p 
                    className={task.isComplete ? 'taskcomplete' : ''} 
                    onClick={() => taskComplete(task)}
                >
                    {task.todo}
                </p>
            </div>
            <div className="task-actions">
                <EditIcon 
                    className='icon edit' 
                    onClick={() => {
                        tasktoUpdate(task);
                        showPopup();
                    }} 
                />
                <CloseIcon 
                    className='icon close' 
                    onClick={() => removeTask(task._id)} 
                />
            </div>
        </li>
    ));

    return (
        <div className='tasklist'>
            <ul>
                {todolist}
            </ul>
        </div>
    );
}

export default Todolist;
