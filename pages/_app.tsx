import 'assets/css/bootstrap.min.css';
import 'assets/css/normalize.css';
import 'assets/css/style.css';
import 'assets/css/responsive.css';

import 'font-awesome/css/font-awesome.min.css';
import '@icon/icofont/icofont.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
