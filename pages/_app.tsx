import '../styles/globals.scss'
import {useRouter} from 'next/router'
import Navbar from "../components/Navbar";

function MyApp({Component, pageProps}) {
    const router = useRouter()

    return <>
        {router.pathname !== '/' && <Navbar/>}
        <Component {...pageProps} />
    </>
}

export default MyApp
