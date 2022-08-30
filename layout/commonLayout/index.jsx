import React from "react";
import styles from "./index.module.scss";
import Head from 'next/head';




const  CommonLayout = ({children , metaTitle , }) => {
    return (
        <div>
            <Head>
                <title>{metaTitle || "SeoService-Flegri" }</title>
                <meta name="description" content="seo smm sem" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>


            <main className={styles.main}>
                {children}
            </main>

            <footer></footer>
        </div>
    )
}

CommonLayout.getInitialProps = async (ctx) => {
};


export default CommonLayout ;



