import React , { useEffect , useState } from "react" ;
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

const detailsCardDemo = [
    {
        id:1 , 
        icon: <BusinessCenterIcon /> , 
        title: "Тариф" , 
        detail: "Стандарт", 
    },
    {
        id:2 , 
        icon: <PeopleOutlineIcon /> , 
        title: "География" , 
        detail: "Все страны", 
    },
    {
        id:3 , 
        icon: <AvTimerIcon/> , 
        title: "Время запуска" , 
        detail: "В течении ± 2 часов", 
    },
    {
        id:4, 
        icon: <CreditCardIcon/> , 
        title: "Источник" , 
        detail: "Официальные источники", 
    },
]; 

const demoComments = [
    {
    image: "/cardImg.png" , 
    title: "Дарья Шапошник" , 
    comment: "Супер смм-сервис. Очень оперативно работают. Обратилась к ним, чтоб раскрутили мой аккаунт в Инстаграм и помогли набрать целевую аудиторию. Они с поставленной задачей справились. Всё сделали качественно, быстро и самое главное недорого. Очень довольна, что обратилась именно к ним. Спасибо." , 
    },
    {
    image: "" , 
    title: "Дарья Шапошник" , 
    comment: "Очень оперативно работают. Спасибо." , 
    },
]

const ProductDetails = ({ catalog , selectedProduct }) => {

    console.log( "selectedProduct" , selectedProduct );

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
                            <CommentsComponent 
                            data={demoComments}
                            />
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