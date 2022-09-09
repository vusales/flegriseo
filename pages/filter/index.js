import React from "react";
import styles from "./index.module.scss";
import { Grid , Container} from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import FilterCatalog from "../../components/FilterCatalog";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Card from "../../components/Card";
import FilterButtons from "../../components/FilterButtons";

const catalogData = [
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "Instagram ", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "Smth", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "Smth 2 ", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "Smth 3", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "smth 4", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "smth4 ", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "Smth 3", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "smth 4", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "smth4 ", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "smth 4", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "smth4 ", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "Smth 3", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "smth 4", 
    }, 
    {
        id: 1 , 
        icon :  <SportsBasketballIcon /> , 
        title: "smth4 ", 
    }, 
]; 

const cardDemo  = [
    {
        id: 1 , 
        imgSrc: "/cardImg.png", 
        title: "LIKES ON PHOTO, VIDEO, ALBUm (STANDARD)", 
        price: "0.29 RUB for 1 like", 
        description: "Likes on photos from active users. Likes come from mobile applications.", 
        promotion: "" , 
        color: "green" , 
    }, 
    {
        id: 2 , 
        imgSrc: "/cardImg.png", 
        title: "LIKES ON PHOTO, VIDEO, ALBUm (STANDARD)", 
        price: "0.29 RUB for 1 like", 
        description: "Likes on photos from active users. Likes come from mobile applications.", 
        promotion: "Sale %" , 
        color: "green" , 

    },
    {
        id: 3  , 
        imgSrc: "/cardImg.png", 
        title: "LIKES ON PHOTO, VIDEO, ALBUm (STANDARD)", 
        price: "0.29 RUB for 1 like", 
        description: "Likes on photos from active users. Likes come from mobile applications.", 
        promotion: "Sale %" , 
        color: "orange" , 
    }, 
    {
        id: 4 , 
        imgSrc: "/cardImg.png", 
        title: "LIKES ON PHOTO, VIDEO, ALBUm (STANDARD)", 
        price: "0.29 RUB for 1 like", 
        description: "Likes on photos from active users. Likes come from mobile applications.", 
        promotion: "" , 
        color: "green" , 
    }, 
]; 


const Filter = () => {
    return (
        <CommonLayout>
            <Container>
                <Grid container spacing={2} > 
                    <Grid item  xs={12} md={3}>
                        <FilterCatalog
                        data={catalogData}
                        /> 
                    </Grid>
                    <Grid item  xs={12} md={9}>
                        <Grid container spacing={2} sx={{padding:0}}>
                            <Grid item xs={12}>
                                <FilterButtons 
                                data={catalogData}
                                /> 
                            </Grid>
                            {
                                cardDemo.map((item, index)=>{
                                    return (
                                        <Card
                                        key={`filter=${index}`}
                                        data={item}
                                        md={4}
                                        sm={6}
                                        xs={12}
                                        />
                                    )
                                })
                            }  
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </CommonLayout>  
    )
}

export default Filter ;