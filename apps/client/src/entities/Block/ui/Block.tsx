import { FC, useState } from "react";
import styles from "./Block.style.module.scss";


type BlockProps = {
	showHeader?: boolean,
	showFooter?: boolean,
	HeaderItems?: any,
	ContentItems?: any,
	FooterItems?: any
}

/**
 * Основа любого элемента логики, агрегирует данные внутри себя и (трансформирует и передает)/
 * (передает оригинальные) данные в компонент ниже.
 * @param props 
 * @returns 
 */
export const Block:FC = (props: BlockProps) => {
	const [title, setTitle] = useState<string>("Default")

	return (<div className={styles["block"]}>
		<div className={styles["block__header"]}>
			<div className={styles["block__header-title"]}>
				<h3>{title}</h3>
			</div>
		</div>
		<div className={styles["block__body"]}>{}</div>
		<div className={styles["block__footer"]}>{}</div>
	</div>)
}