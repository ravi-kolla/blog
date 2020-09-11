import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(fab, faEnvelope, faChevronRight)

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
