import React from "react"
import styles from "./index.module.scss";
import ListIcon from '@mui/icons-material/List';
import Link from "next/link";
import { DesktopTablet , Desktop} from "../../ui/Breakpoints";
import Image from 'next/image'; 


const FilterCatalog = ({data}) => {
    return(
        <div className={styles.container}>
            {/* <Desktop> */}
                <div className={styles.titleContainer}>
                    <ListIcon /> 
                    <p>Service categories</p>
                </div>
            {/* </Desktop> */}
            

            {
                data.map((item, index)=>{
                    return(
                        <Link 
                        key={`filtrCat${index}`}
                        href={{
                            pathname: '/filter',
                            query: { category: item.categoryName },
                        }}
                        >
                            <a className={styles.catalogItem}>
                                <Image
                                src="/cardImg.png"
                                alt="category logo image"
                                width={20}
                                height={20}
                                />
                                {/* {item?.icon} */}
                                <p>{item.categoryName}</p>
                            </a>
                        </Link> 

                    )
                    
                })
            }

                      
        </div>
    )

}

export default FilterCatalog ;  