import React , {
    useEffect , 
    useState , 
} from "react" ;
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import Container from '@mui/material/Container';
import SpecialAnouncment from "../../components/SpecialAnouncment";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StaticBanner from "../../components/StaticBanner";
import Card from "../../components/Card";
import { Grid } from "@mui/material";
import { getCatalogData } from "../../api/catalogContent";
import {getSpecialProducts} from "../../api/productContent"; 
import { getPagesBanner } from "../../api/homecontent"; 



const UserChoice = ({ catalog, cheapServicess , banners  }) => {

    const [banner , setBanner ] = useState(null); 

    useEffect(()=> {
        getSuitableBanner("Cheap Services") ; 
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
                buttonText={"VIEW CHEAP SERVICES"}
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
                            <h2>SERVICES THAT USERS CHOOSE</h2>
                            <div className={styles.line}></div>
                        </div>
                    </Grid>
                    {
                        cheapServicess?.products?.map((item, index)=> {
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
    const { cheapServicess } =  await getSpecialProducts(); 
    const {banners} =  await getPagesBanner(); 

    return {
      props : {
        catalog , 
        cheapServicess , 
        banners , 
      } 
    }
}

export default UserChoice ; 