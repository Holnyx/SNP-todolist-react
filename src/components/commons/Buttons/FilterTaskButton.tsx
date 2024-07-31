import React, { FC, memo, useCallback } from 'react';

import { useActionWithPayload } from '@/hooks/hooks';
import { changeTodolistFilterAC } from '@/store/actions';
import { FilterValues } from '@/store/types';

type ButtonFilterItem = {
  getTitle: string;
  filterTypes: FilterValues;
  className: string;
};

const FilterTaskButton: FC<ButtonFilterItem> = ({ getTitle, filterTypes, className }) => {
  const changeTodolistFilterAction = useActionWithPayload(
    changeTodolistFilterAC
  );

  const changeTodoListFilter = useCallback((filter: FilterValues) => {
    changeTodolistFilterAction(filter);
  }, []);

  return (
    <button
      className={className}
      onClick={() => changeTodoListFilter(filterTypes)}
    >
      {getTitle}
    </button>
  );
};

export default memo(FilterTaskButton);
