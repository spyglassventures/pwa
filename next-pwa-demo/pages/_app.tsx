import type { AppProps } from 'next/app';
import '../app/globals.css'; // Adjust this path to point to your global CSS file

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
