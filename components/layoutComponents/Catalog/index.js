import React from "react"; 
import styles from "./index.module.scss"; 
import CatalogButton from "./CatalogButton";

const Catalog = ({catalog}) => {
    console.log("catalog in Catalog" ,  catalog);
    return (
        <div className={styles.catalogContainer}>
            <p>Service categories</p>
            {
                catalog?.length&&catalog.map((item , index)=>{
                    return(
                        <CatalogButton 
                        key={`catalog-Button${item.id}`}
                        data={item} 
                        />
                    )
                })
            }
        </div>
    )
}

export default Catalog; 