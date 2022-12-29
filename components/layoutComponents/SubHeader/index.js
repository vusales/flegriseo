import React from "react"; 
import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";


const Subheader =  () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <div className={styles.subHeaderContainer}>
            <ul className={styles.servicesContainer}>
                <li className={currentRoute === "/filter" ?  `${styles.servicesLi} , ${styles.activeLink}` : styles.servicesLi }>
                    <Link href="/filter">
                        <a className={styles.items}>Services</a>
                    </Link>
                </li>
                <li className={currentRoute === "/cheapServices" ?  `${styles.servicesLi} , ${styles.activeLink}` : styles.servicesLi }>
                    <Link href="/cheapServices">
                        <a className={styles.items}>Cheap services</a>
                    </Link>
                </li>
                <li className={currentRoute === "/userChoice" ?  `${styles.servicesLi} , ${styles.activeLink}` : styles.servicesLi }>
                    <Link href="/userChoice">
                        <a className={styles.items}>User Choice</a>
                    </Link>
                </li>
                <li className={currentRoute === "/smmForBusiness" ?  `${styles.servicesLi} , ${styles.activeLink}` : styles.servicesLi }>
                    <Link href="/smmForBusiness">
                        <a className={styles.items}>SMM for business</a>
                    </Link>
                </li>
                <li className={currentRoute === "/bigBrands" ?  `${styles.servicesLi} , ${styles.activeLink}` : styles.servicesLi }>
                    <Link href="/bigBrands">
                        <a className={styles.items}>Big brands</a>
                    </Link>
                </li>
            </ul>
            <Link href="/likeForSubscriptions">
                <a className={styles.subHeaderButton} >Like subscription</a>
            </Link>
        </div>
    )
}

export default Subheader ;