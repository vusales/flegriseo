import React from "react"; 
import styles from "./index.module.scss"; 
import HouseboatIcon from '@mui/icons-material/Houseboat';


const CatalogButton =({data})=>{
    return(
        <div className={styles.catalogButton}>
            <HouseboatIcon/>
            <p>{data.catalogName}</p>

            <div className={styles.catalogHoveredElement}>
                {
                    data?.subCatalogs?.map((item ,  index )=>{
                        return (
                            <a href="#" key={`catBut---${index}`}>
                                <div 
                                key={`catBut${index}`}
                                >
                                    <HouseboatIcon/>
                                    <p>{item.catalogName}</p>
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