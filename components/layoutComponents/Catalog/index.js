import React from "react"; 
import styles from "./index.module.scss"; 
import CatalogButton from "./CatalogButton";

const Catalog = ({catalog}) => {
    return (
        <div className={styles.catalogContainer}>
            <p>Service categories</p>
            {
                catalog?.length&&catalog.map((item , index)=>{
                    console.log("catalog item" ,  item ) ;
                    return(
                        <CatalogButton 
                        key={`catalog-Button${index}`}
                        data={item} 
                        />
                    )
                })
            }
        </div>
    )
}

export default Catalog; 