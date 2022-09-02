import React from "react"; 
import styles from "./index.module.scss";
import Link from "next/link";

const Subheader =  () => {
    return (
        <div className={styles.subHeaderContainer}>
            <ul className={styles.servicesContainer}>
                <li className={styles.servicesLi}>
                    <Link href="/serviceDetails">
                        <a className={styles.items}>Servicess</a>
                    </Link>
                </li>
                <li className={styles.servicesLi}>
                    <Link href="/cheapServices">
                        <a className={styles.items}>Sale</a>
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

            <button className={styles.subHeaderButton} >
                Like subscription
            </button>
        </div>
    )
}

export default Subheader ;