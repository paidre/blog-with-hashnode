import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import {Header} from '../components/header'
import {Footer} from '../components/footer'

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<Header/>
			<div className="mx-auto max-w-screen-xl">
				<main>{children}</main>
			</div>
			<Footer/>
			<Analytics />
			<Integrations />
		</>
	);
};
