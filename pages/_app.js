import '../styles/globals.css';
import "../styles/styles.scss";
// SLICK CAROUSEL
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// FONT AWESOME
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
