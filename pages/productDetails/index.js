import React  from "react" ;
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import Container from '@mui/material/Container';
import { Grid ,  Paper } from "@mui/material";
import ProductDetailsComponent from "../../components/ProductDetailsComponent";
import ProductDetailsCardsComponent from "../../components/ProductDetailsCardsComponent";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CommentsComponent from "../../components/CommentsComponent";
import { useRouter } from 'next/router'
// api 
import { getProductById } from "../../api/productContent";
import {getCatalogData} from "../../api/catalogContent"; 
// ***

const ProductDetails = ({ catalog , selectedProduct }) => {

    return (
        <CommonLayout catalog={catalog}>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <Paper elevation={2} className={styles.papper}>
                            <ProductDetailsComponent 
                            data={selectedProduct}
                            />
                            <Grid 
                                container 
                                spacing={2} 
                                p={3}
                            >
                                {
                                    selectedProduct?.options?.productFeatures?.map((item, index)=>{
                                        return(
                                            <ProductDetailsCardsComponent
                                            key={`detailsCard${index}-${index+1}`}
                                            data={item}
                                            />
                                        )
                                    })
                                }
                            </Grid>
                            <div className={styles.productDescriptionContainer}>
                                {
                                    selectedProduct.options.introDescription? 
                                    <p>- {selectedProduct.options.introDescription}</p>
                                    :null
                                }
                                {
                                    selectedProduct.options.productDescription? 
                                    <p>{selectedProduct.options.productDescription}</p>
                                    :null
                                }
                            </div>
                            {/* <CommentsComponent 
                            data={demoComments}
                            /> */}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </CommonLayout>
    )
}


ProductDetails.getInitialProps = async (context) => {
    // this request have to be each page 
    const catalogData =  await getCatalogData() ; 
    const catalog =  catalogData.data ;
    // *********************** 

    const {id}  = context.query ; 
    const  {productById} =  await getProductById(id) ; 

    return { 
        catalog , 
        selectedProduct :  productById , 
    }
}



export default ProductDetails ; 