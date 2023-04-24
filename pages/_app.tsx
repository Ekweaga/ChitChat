import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Authcontentprovider from "../contextApi/contextapi"

export default function App({ Component, pageProps }: AppProps) {

return(
  <Authcontentprovider>
  
  <Component {...pageProps} />   
  
  </Authcontentprovider>)
}
