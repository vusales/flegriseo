import react from "react"
import styles from "./index.module.scss";
import ListIcon from '@mui/icons-material/List';
import Link from "next/link";
import { DesktopTablet , Desktop} from "../../ui/Breakpoints";
  

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
                        href="/"
                        >
                            <a className={styles.catalogItem}>
                                {item?.icon}
                                <p>{item.title}</p>
                            </a>
                        </Link> 

                    )
                    
                })
            }

                      
        </div>
    )

}

export default FilterCatalog ;  