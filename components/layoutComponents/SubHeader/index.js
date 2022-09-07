import React from "react"; 
import styles from "./index.module.scss";
import Link from "next/link";

const Subheader =  () => {
    return (
        <div className={styles.subHeaderContainer}>
            <ul className={styles.servicesContainer}>
                <li className={styles.servicesLi}>
                    <Link href="/filter">
                        <a className={styles.items}>Services</a>
                    </Link>
                </li>
                <li className={styles.servicesLi}>
                    <Link href="/cheapServices">
                        <a className={styles.items}>Cheap services</a>
                    </Link>
                </li>
                <li className={styles.servicesLi}>
                    <Link href="/userChoice">
                        <a className={styles.items}>User Choice</a>
                    </Link>
                </li>
                <li className={styles.servicesLi}>
                    <Link href="/smmForBusiness">
                        <a className={styles.items}>SMM for business</a>
                    </Link>
                </li>
                <li className={styles.servicesLi}>
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