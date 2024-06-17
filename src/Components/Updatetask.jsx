// import React, { useState } from 'react';
// import axios from 'axios';
// import './Updatetask.css';

// function Updatetask(props) {
//     const [task, setTask] = useState(props.taskToUpdate.todo);

//     const updateTask = () => {
//         axios.put(`http://localhost:8000/api/tasks/${props.taskToUpdate._id}`, { ...props.taskToUpdate, todo: task })
//             .then(res => {
//                 props.updateTask(res.data);
//                 props.closePopup();
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className='popup'>
//             <div className='popup-content'>
//                 <input
//                     type='text'
//                     placeholder='Update Task . . .'
//                     value={task}
//                     onChange={event => setTask(event.target.value)}
//                 />
//                 <button onClick={updateTask}>Update</button>
//             </div>
//         </div>
//     );
// }

// export default Updatetask;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Updatetask.css';

function Updatetask(props) {
    const { taskToUpdate, updateTask, closePopup } = props;
    const [task, setTask] = useState('');

    useEffect(() => {
        if (taskToUpdate) {
            setTask(taskToUpdate.todo);
        }
    }, [taskToUpdate]);

    const handleUpdate = () => {
        if (taskToUpdate) {
            axios.put(`http://localhost:8000/api/tasks/${taskToUpdate._id}`, { todo: task })
                .then(res => {
                    updateTask(res.data);
                    closePopup();
                })
                .catch(err => {
                    console.error('Error updating task:', err);
                });
        }
    };

    return (
        <div className='popup'>
            <div className='popup-content'>
                <input
                    type='text'
                    placeholder='Update Task...'
                    value={task}
                    onChange={event => setTask(event.target.value)}
                />
                <button onClick={handleUpdate} disabled={!taskToUpdate}>Update</button>
                <button onClick={closePopup}>Cancel</button>
            </div>
        </div>
    );
}

export default Updatetask;
