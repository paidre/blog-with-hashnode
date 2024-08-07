import { AppProps } from 'next/app';
import '../styles/index.css';
import { Inter } from "next/font/google";
import {Layout} from "../components/layout"

const inter = Inter({
	subsets: ["latin"],
  });

export default function MyApp({ Component, pageProps }: AppProps) {
	return 	<>	
	<main className={inter.className}>

	<Component {...pageProps} />

	</main>
	</>
}
