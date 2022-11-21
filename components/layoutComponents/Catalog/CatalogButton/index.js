import React from "react"; 
import styles from "./index.module.scss"; 
import HouseboatIcon from '@mui/icons-material/Houseboat';


const CatalogButton =({data})=>{

    console.log("data in CatalogBuitton subCategories ------" , data.subCategories ) ;
    return(
        <div className={styles.catalogButton}>
            <HouseboatIcon/>
            <p>{data.categoryName}</p>

            <div className={styles.catalogHoveredElement}>
                {
                    data?.subCategories?.map((item ,  index )=>{
                        return (
                            <a href="#" key={`catBut---${index}`}>
                                <div 
                                key={`catBut${index}`}
                                >
                                    <HouseboatIcon/>
                                    <p>{item.categoryName}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CatalogButton ;