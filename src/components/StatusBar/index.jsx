import './style.sass';

import { useState } from 'react';
import { useEffect } from 'react';

const StatusBar = ({ taskList }) => {
    const [done, setDone] = useState('0%');
    const [todo, setTodo] = useState('100%');

    useEffect(() => {
        let doneTasks = taskList ? taskList.filter((task) => task.checked == true) : 0;
        let donePercent = Math.round(doneTasks.length / taskList.length * 100);
        let todoPercent = 100 - donePercent;
        setDone(donePercent + '%');
        setTodo(todoPercent + '%');
        console.log(doneTasks);
    }, [taskList]);


    return (
        <div className='create__sections--status'>
            <p>{done}</p>
            <div className='done' style={{ width: done }}></div>
            <div className='todo' style={{ width: todo, borderRadius: todo == '100%' && '.25rem' }}></div>
            <p>100%</p>
        </div >
    );
};

export default StatusBar;