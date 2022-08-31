import React from "react";
import styles from "./index.module.scss";
import Head from 'next/head';
import Header from "../../components/layoutComponents/Header";
import Footer from "../../components/layoutComponents/Footer";


const  CommonLayout = ({children , metaTitle , }) => {
    return (
        <div>
            <Head>
                <title>{metaTitle || "SeoService-Flegri" }</title>
                <meta name="description" content="seo smm sem" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div style={{backgroundColor:"#fff"}}>
                <Header/>
            </div>

            <main className={styles.main}>
                {children}
            </main>

            <div style={{backgroundColor:"#fff"}}>
                <Footer/>
            </div>

        </div>
    )
}

CommonLayout.getInitialProps = async (ctx) => {
};


export default CommonLayout ;



