import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import { StaticKitProvider } from '@statickit/react';

export default function App({ Component, pageProps }) {
  return (
    <StaticKitProvider site="6620fd8516ee">
      <Component {...pageProps} />
    </StaticKitProvider>
  )
}
