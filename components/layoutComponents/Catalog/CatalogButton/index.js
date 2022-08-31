import React from "react"; 
import styles from "./index.module.scss"; 
import HouseboatIcon from '@mui/icons-material/Houseboat';


const CatalogButton =({data})=>{
    console.log("title" ,  data.title);
    return(
        <div className={styles.catalogButton}>
            <HouseboatIcon/>
            <p>{data.title}</p>

            <div className={styles.catalogHoveredElement}>
                {
                    data?.subServicess?.map((item ,  index )=>{
                        console.log("subItem" , item );
                        return (
                            <a href="#">
                                <div 
                                key={`catBut${index}`}
                                >
                                    <HouseboatIcon/>
                                    <p>{item.title}</p>
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