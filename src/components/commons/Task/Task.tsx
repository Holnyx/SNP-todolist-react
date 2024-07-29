import React, { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import Input from '../Input/Input';

import s from './Task.module.sass';
import cx from 'classnames';

export type TaskItems = {
  id: string;
  oldTitle: string;
  isDone: boolean;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
  removeTask: (taskId: string) => void;
  getTitle: (newTitle: string) => void;
};

const Task: FC<TaskItems> = ({
  id,
  oldTitle,
  isDone,
  changeTaskStatus,
  removeTask,
  getTitle,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [newTitle, setNewTitle] = useState(oldTitle);

  const changeStatus = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    changeTaskStatus(id, e.currentTarget.checked);
  }, []);

  const changeTaskTitleHandler = () => {
    setIsHidden(!isHidden);
    if (isHidden) {
      newTitle.trim() === '' ? removeTask(id) : getTitle(newTitle.trim());
    }
    setNewTitle(oldTitle);
  };

  const cancelChangeTaskTitle = () => {
    setIsHidden(!isHidden);
    setNewTitle(oldTitle);
  };

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      cancelChangeTaskTitle();
    } else if (event.key === 'Enter') {
      changeTaskTitleHandler();
    }
  };

  const checkedClass = cx({ [s['task__title--checked']]: isDone });
  const checkedCheckbox = cx({ [s['custom-checkbox-img--show']]: isDone });

  return (
    <li
      className={s['list__task']}
      onDoubleClick={changeTaskTitleHandler}
    >
      <input
        className={s['task__checkbox']}
        type="checkbox"
        id={id}
        onChange={changeStatus}
      />
      {!isHidden && (
        <label
          htmlFor={id}
          className={s['task__custom-checkbox']}
        >
          <svg
            className={`${s['custom-checkbox-img']} ${checkedCheckbox}`}
            width="10"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.293044 4.53581C0.683569 4.14529 1.31673 4.14529 1.70726 4.53581L4.62161 7.45017L11.1574 0.914353C11.5479 0.523829 12.1811 0.523829 12.5716 0.914353C12.9622 1.30488 12.9622 1.93804 12.5716 2.32857L5.32872 9.57149C4.93819 9.96201 4.30503 9.96201 3.9145 9.57149L0.293044 5.95003C-0.09748 5.5595 -0.09748 4.92634 0.293044 4.53581Z"
              fill="#1B1F2B"
            />
          </svg>
        </label>
      )}

      {!isHidden ? (
        <label className={`${s['task__title']} ${checkedClass}`}>
          {oldTitle}
        </label>
      ) : (
        <Input
          onKeyDown={keyDownHandler}
          onChange={changeTitleHandler}
          onBlur={changeTaskTitleHandler}
          className={s['input-value']}
          value={newTitle}
          autoFocus={true}
          placeholder={''}
          type={'text'}
        />
      )}
      {!isHidden && (
        <button
          className={s['task__del-btn']}
          onClick={() => removeTask(id)}
        >
          ×
        </button>
      )}
    </li>
  );
};
export default memo(Task);
