import { useState, useEffect } from 'react';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { setTaskFilter, TaskStatusEnum, subscribeToTaskListChange } from "entities/Task";
import { ITaskListFilter } from 'entities/Task/model';

type FilterItemType = {
	label: string,
	filter: TaskStatusEnum | null,
};

const filterItems: FilterItemType[] = [
	{ label: 'Все', filter: null }, 
	{ label: 'В работе', filter: TaskStatusEnum.inWork },
	{ label: 'В ожидании', filter: TaskStatusEnum.pending },
	{ label: 'Завершено', filter: TaskStatusEnum.done },
];

export const TaskListFilter = () => {
	const [value, setValue] = useState<FilterItemType | null>(filterItems[0]);

	useEffect(() => {
		const unsubscribe = subscribeToTaskListChange((data: ITaskListFilter["status"]) => {
			const newFilterValue = filterItems.find(item => item.filter === data);
			setValue(newFilterValue ? newFilterValue : filterItems[0])
		})

		return unsubscribe;
	}, [])

	const onValueChange = ({ value }: { value: FilterItemType }) => {
		setValue(value);
		setTaskFilter({ status: value.filter })
	}

  return (
    <ChoiceGroup
			form="round"
      value={value}
			size='s'
      onChange={onValueChange}
      items={filterItems}
      getItemLabel={(item) => item.label}
      multiple={false}
      name="ChangeTaskListFilter"
			style={{
				background: "rgba(247, 248, 249, .2)",
				border: "2px solid rgba(247, 248, 249, .2)",
				backdropFilter: "blur(20px)", 
			}}
    />
  );
}