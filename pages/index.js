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
import { getBannerData , getHomePageData } from "../api/homecontent";

export default function Home({banners , infoCards , subscriptions , whyChooseUs , statistics }) {
  return (
      <CommonLayout>
        <Container>
          <Banner data={banners} />
          <Anouncment data={infoCards} /> 
          <CatalogSection />
          <SubScription data={subscriptions} />
          {
            whyChooseUs?.length ? 
            <WhyUs data={whyChooseUs}/>
            :null
          }
          {
            statistics?.length ? 
            <SiteStatistics data={statistics} />
            :null
          }
        </Container>
      </CommonLayout>
  )
}

export const getStaticProps = async (context) => {
  console.log("context" , context ); 

  const {data} = await getHomePageData(); 
  const {banners , infoCards , subscriptions , whyChooseUs , statistics } =  data ; 
 
  return {
    props : {
      banners,
      infoCards,
      subscriptions : subscriptions[0] ,
      whyChooseUs , 
      statistics ,
    } 
  }
}




