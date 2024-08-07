import React from "react";
import styles from "./index.module.scss";
import Head from 'next/head';
import Header from "../../components/layoutComponents/Header";
import Footer from "../../components/layoutComponents/Footer";


const  CommonLayout = ({children , metaTitle , catalog }) => {
    return (
        <div>
            <Head>
                <title>{metaTitle || "SeoService-Flegri" }</title>
                <meta name="description" content="seo smm sem" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                {/* <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                /> */}
            </Head>
            <div style={{backgroundColor:"#fff"}}>
                <Header catalog={catalog}/>
            </div>

            <main className={styles.main} >
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



