import React from "react"
import styles from "./index.module.scss";
import ListIcon from '@mui/icons-material/List';
import Link from "next/link";
import { DesktopTablet , Desktop} from "../../ui/Breakpoints";
import Image from 'next/image'; 
import { makeImageUrl } from "../../utils/helper";


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
                            pathname: '/Filter',
                            query: { categoryId: item._id },
                        }}
                        >
                            <a className={styles.catalogItem}>
                                {
                                    item.image ? 
                                    <Image
                                    src={makeImageUrl(item.image)}
                                    alt="category logo image"
                                    width={20}
                                    height={20}
                                    />
                                    :null
                                }
                                
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