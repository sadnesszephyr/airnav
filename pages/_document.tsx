import Document, { Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>*/}
                    {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>*/}
                    {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>*/}
	                <meta name="theme-color" content="#FFFFFF"/>
	                <link rel="manifest" href="/site.webmanifest"/>
                    {/*<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5865f2"/>*/}
                    <meta name="msapplication-TileColor" content="#FFFFFF"/>
                    <meta name="theme-color" data-react-helmet="true" content="#1B1B1B"/>
                    {/*<meta content="Mono" property="og:title"/>*/}
                    {/*<meta content="Mono was designed with special attention to comfort usability and high customization to help you to get rid of overage of bots." property="og:description"/>*/}
                    {/*<meta content="https://mono-bot.vercel.app/images/logoBlurple.pmg" property="og:image"/>*/}
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
