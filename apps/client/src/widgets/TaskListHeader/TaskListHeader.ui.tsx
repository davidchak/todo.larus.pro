import { useCallback, useState } from "react";
import { v4 } from "uuid";
import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { FieldGroup } from "@consta/uikit/FieldGroup";
import { TextField } from "@consta/uikit/TextField";
import { IconAdd } from "@consta/uikit/IconAdd";
import { IconSearch } from "@consta/uikit/IconSearch";
import { IconSettings } from "@consta/uikit/IconSettings";
import { debounce } from "lodash";
import { addTaskAsync } from "entities/Task"; 

export interface ITaskListHeaderProps { 
	page: string
}

export const TaskListHeader = () => {
	const [searchInput, setSearchInput ] = useState<string|null>(null);

	// TODO: переименовать и изменить логику на установку фильтра списка задач после добавления фильтра к стору задач
	const handleDebounceFn = (input: string|null) => {
		console.log(input)
	}

	const debounceFn = useCallback(debounce(handleDebounceFn, 300), []);

	const onSearchInputChange = async ({ value }: { value: string | null }) => {
		setSearchInput(value);
		debounceFn(value);
	} 

	return (<Layout style={{ height: "64px", gap: "64px", paddingLeft: "10px", paddingRight: "10px", alignItems: "center" }} >
		<div style={{ fontSize: "28px", fontWeight: "500" }}>"ЗАДАЧИ"</div>
		
		<Layout style={{ gap: "32px" }} flex={1}>
			<Button label="Создать" iconRight={IconAdd} size="m" onClick={ addTaskAsync }/>
			
			<FieldGroup form="default" size="m">
				{/* TODO: описать открытие модалки с фильтрами (группа/проект/ответственный/статус выполнения) */}
				{/* <Button label="Button" onlyIcon size="m" view="ghost" form="default" iconRight={IconFilter} style={{
					border: "2px solid rgba(247, 248, 249, .2)",
					background: "rgba(247, 248, 249, .2)",
					backdropFilter: "blur(20px)",
				}}/> */}
				<TextField style={{
					width: "450px", 
					// background: "rgba(247, 248, 249, .2)",
					// backdropFilter: "blur(20px)",
				}} value={searchInput} onChange={onSearchInputChange} placeholder="Поиск" size="m" />
				{/* TODO: описать функционал установки */}
				<Button style={{ minWidth: "100px" }} label="Button" onlyIcon size="m" view="primary" form="default" iconRight={IconSearch}/>
			</FieldGroup> 
		</Layout>
		
		{/* TODO: добавить финкционал открытия модалки/страницы настроек задач (шаблоны/поля для отображения...) */}
		<Button label="Button" onlyIcon size="m" view="ghost" form="default" iconRight={IconSettings} style={{
			background: "rgba(247, 248, 249, .2)",
			border: "2px solid rgba(247, 248, 249, .2)",
			backdropFilter: "blur(20px)",  
		}}/>
	</Layout>)
}