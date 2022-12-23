import React, {
    useState , 
    useEffect ,
} from "react";
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import Container from '@mui/material/Container';
import SpecialAnouncment from "../../components/SpecialAnouncment";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StaticBanner from "../../components/StaticBanner";
import { Grid } from "@mui/material";
import Card from "../../components/Card";
import { getCatalogData } from "../../api/catalogContent";
import {getSpecialProducts} from "../../api/productContent"; 
import { getPagesBanner } from "../../api/homecontent"; 


const BigBrands =({catalog ,  banners , bigBrands  })=> {

    const [banner , setBanner ] = useState(null); 

    useEffect(()=> {
        getSuitableBanner("Big brands") ; 
    }, []); 

    const getSuitableBanner = (currentBanner) => {
        let banner =  banners.filter((item)=> item.pageName === currentBanner)[0].pageContent ; 
        setBanner(banner) ; 
    }

    return (
        <CommonLayout catalog={catalog}>
            <Container>
                <StaticBanner 
                title={banner?.title}
                subTitle={banner?.intro}
                description={banner?.bannerDescription}
                buttonText={"VIEW BIG BRANDS"}
                imageSrc={banner?.image}
                />  

                {
                    banner?.characteristicCards.length ? 
                    <SpecialAnouncment
                    data={ banner?.characteristicCards}
                    />
                    :null
                }

                <Grid container spacing={2} sx={{marginTop:2,  marginBottom:2}}>
                    <Grid item xs={12} >
                        <div className={styles.title}>
                            <h2>AFFORDABLE PREMIUM PROMOTION FOR EVERYONE!</h2>
                            <div className={styles.line}></div>
                        </div>
                    </Grid>

                    {
                        bigBrands?.products?.map((item, index)=> {
                            return (
                                <Card
                                key={`cardCheap=${index}`}
                                data={item}
                                />
                            )
                        })
                    }

                </Grid>


            </Container>
        </CommonLayout>
    )
}

export const getStaticProps = async (context) => {

    // this request have to be each page 
    const catalogData =  await getCatalogData() ; 
    const catalog =  catalogData.data ;
    // *********************** 
    const { bigBrands } =  await getSpecialProducts(); 
    const {banners} =  await getPagesBanner(); 
  
    return {
      props : {
        catalog , 
        bigBrands , 
        banners ,
      } 
    }
}



export default BigBrands ; 