// import React, { useState } from 'react';
// import axios from 'axios';
// import './Addtask.css';

// function Addtask(props) {
//     const [task, setTask] = useState('');

//     const addTask = () => {
//         axios.post('http://localhost:8000/api/tasks', { todo: task })
//             .then(res => {
//                 props.addTask(res.data);
//                 setTask('');
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className='addtask'>
//             <input
//                 type='text'
//                 placeholder='Add Task . . .'
//                 value={task}
//                 onChange={event => setTask(event.target.value)}
//             />
//             <button onClick={addTask}>Add Task</button>
//         </div>
//     );
// }

// export default Addtask;


import React, { useState } from 'react';
import axios from 'axios';
import './Addtask.css';

function Addtask(props) {
    const [task, setTask] = useState('');

    const addTask = () => {
        axios.post('http://localhost:8000/api/tasks', { todo: task })
            .then(res => {
                props.addTask(res.data);
                setTask('');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='addtask'>
            <input
                type='text'
                placeholder='Add Task . . .'
                value={task}
                onChange={event => setTask(event.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default Addtask;
