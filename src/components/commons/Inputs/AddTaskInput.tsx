import React, { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import { v1 } from 'uuid';

import { useActionWithPayload } from '@/hooks/hooks';
import { addTaskAC } from '@/store/actions';
import { TaskStateItems } from '@/store/types';


type InputItems = {
  className: string;
  placeholder: string;
  type: string;
  autoFocus?: boolean;
};

const AddTaskInput: FC<InputItems> = ({ className, placeholder, type, autoFocus }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const addTaskAction = useActionWithPayload(addTaskAC);
  
  const addTask = useCallback((task: TaskStateItems) => {
    addTaskAction({ task });
  }, []);

  const setTaskTitleHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTaskTitle(event.currentTarget.value);
    },
    []
  );

  const addTaskHandler = useCallback(() => {
    if (taskTitle.trim() !== '') {
      addTask({ id: v1(), title: taskTitle, isDone: false });
    }
    setTaskTitle('');
  }, [taskTitle, addTask]);

  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={taskTitle}
      onChange={setTaskTitleHandler}
      onKeyDown={event => event.key === 'Enter' && addTaskHandler()}
      onBlur={addTaskHandler}
      autoFocus={autoFocus}
    />
  );
};

export default memo(AddTaskInput);
