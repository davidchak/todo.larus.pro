import { Header } from '../header';

export function Page(props){
	const {children} = props;
	
	return <div>
		<Header />
		<div>{children}</div>
	</div>
}