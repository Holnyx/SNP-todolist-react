import React, { FC, memo, useCallback, useState } from 'react';
import { v1 } from 'uuid';

import { useActionWithPayload } from '@/hooks/hooks';
import { addTaskAC } from '@/store/actions';
import { TaskStateItems } from '@/store/types';

type ButtonItem = {
  getTitle: string;
  className: string;
};

const AddTaskButton: FC<ButtonItem> = ({ getTitle, className }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const addTaskAction = useActionWithPayload(addTaskAC);

  const addTask = useCallback((task: TaskStateItems) => {
    addTaskAction({ task });
  }, []);

  const addTaskHandler = useCallback(() => {
    if (taskTitle.trim() !== '') {
      addTask({ id: v1(), title: taskTitle, isDone: false });
    }
    setTaskTitle('');
  }, [taskTitle, addTask]);

  return (
    <button
      className={className}
      onClick={() => addTaskHandler()}
    >
      {getTitle}
    </button>
  );
};

export default memo(AddTaskButton);
