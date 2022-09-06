import react from "react"
import styles from "./index.module.scss";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const ProductDetailsComponent = () => {

    const Promotion = (decription , color) => {
        if(decription){
            return (
                <div className={styles.promotion} style={color ? {backgroundColor: color} : null }>
                    {decription}
                </div>
            )
        }else {
            return null;
        }
    }

    return(
        <Grid container>
            <Grid item xs={12} md={3} >
                <div className={styles.imageContainer}>
                    {Promotion("sale df 50%" ,  "red")}
                    <Image src="/cardImg.png" width={150} height={150} />
                </div>
            </Grid>
            <Grid item xs={12} md={9} >
                <div className={styles.descriptionCon}>
                    <h1>ЛАЙКИ НА ФОТО, ВИДЕО, АЛЬБОМ (СТАНДАРТ)</h1>
                    <div className={styles.middleSection}>
                        <p className={styles.price}>72.50 ₼</p>

                        <div className={styles.addRemoveContainer}>
                            <button> <RemoveIcon/> </button>
                            <div>
                                <p>3750</p>
                                <p>like</p>
                            </div>
                            <button> <AddIcon/> </button>
                        </div>

                        <Link 
                        href="/order"
                        >
                            <a className={styles.button}>Order</a>
                        </Link>
                    </div>

                    <div className={styles.infoContainer}>
                        <ErrorOutlineIcon />
                        <p >Цена за одно действие 0.29 руб 0.58 руб (250 шт. = 72.5 руб.)</p>
                    </div>
                </div>
            </Grid>
        </Grid>
    )

}

export default ProductDetailsComponent ; 