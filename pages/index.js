import React from "react"; 
import Image from 'next/image'
import styles from '../styles/Home.module.css' ; 
import Container from '@mui/material/Container';
import CommonLayout from "../layout/commonLayout";
import Catalog from "../components/layoutComponents/Catalog";
import Banner from "../components/Banner";
import Anouncment from "../components/Anouncment";

export default function Home() {
  return (
    
      <CommonLayout>
        <Container>
          <Banner />
          <Anouncment /> 
        </Container>
      </CommonLayout>
  )
}
