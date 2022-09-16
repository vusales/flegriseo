import React from "react"; 
import Image from 'next/image'
import styles from '../styles/Home.module.css' ; 
import Container from '@mui/material/Container';
import CommonLayout from "../layout/commonLayout";
import Banner from "../components/Banner";
import Anouncment from "../components/Anouncment";
import CatalogSection from "../components/CatalogSection";
import SubScription from "../components/Subscription";
import WhyUs from "../components/WhyUs";
import SiteStatistics from "../components/SiteStatistics";
import { getBannerData } from "../api/banner";

export default function Home({banner}) {

  console.log("banner" , banner); 

  return (
      <CommonLayout>
        <Container>
          <Banner data={banner} />
          <Anouncment /> 
          <CatalogSection />
          <SubScription/>
          <WhyUs/>
          <SiteStatistics />
        </Container>
      </CommonLayout>
  )
}

export const getStaticProps = async (context) => {

  const {data} = await getBannerData(); 

  return {
    props : {
      banner : data , 
    } 
  }

}




