import styles from "./Button.module.css";


type ButtonPropsType = {
	text: string;
	action: (props: any) => void;
}

export const Button = ({ text, action }: ButtonPropsType) => {

	return <button className={styles.button} onClick={action} >{text}</button>
}