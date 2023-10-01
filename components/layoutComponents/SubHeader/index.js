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
                    <Link href="/Filter">
                        <a className={styles.items}>Services</a>
                    </Link>
                </li>
                <li className={currentRoute === "/cheapServices" ?  `${styles.servicesLi} , ${styles.activeLink}` : styles.servicesLi }>
                    <Link href="/CheapServices">
                        <a className={styles.items}>Cheap services</a>
                    </Link>
                </li>
                <li className={currentRoute === "/userChoice" ?  `${styles.servicesLi} , ${styles.activeLink}` : styles.servicesLi }>
                    <Link href="/UserChoice">
                        <a className={styles.items}>User Choice</a>
                    </Link>
                </li>
                <li className={currentRoute === "/smmForBusiness" ?  `${styles.servicesLi} , ${styles.activeLink}` : styles.servicesLi }>
                    <Link href="/SmmForBusiness">
                        <a className={styles.items}>SMM for business</a>
                    </Link>
                </li>
                <li className={currentRoute === "/bigBrands" ?  `${styles.servicesLi} , ${styles.activeLink}` : styles.servicesLi }>
                    <Link href="/BigBrands">
                        <a className={styles.items}>Big brands</a>
                    </Link>
                </li>
            </ul>
            <Link href="/LikeForSubscriptions">
                <a className={styles.subHeaderButton} >Like subscription</a>
            </Link>
        </div>
    )
}

export default Subheader ;