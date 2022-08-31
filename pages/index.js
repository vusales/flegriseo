import React from "react"; 
import Image from 'next/image'
import styles from '../styles/Home.module.css' ; 
import Container from '@mui/material/Container';
import CommonLayout from "../layout/commonLayout";

export default function Home() {
  return (
    
      <CommonLayout>
        <Container>
          <div>hELLO</div>
        </Container>
        {/* <div>childreen</div> */}
      </CommonLayout>
  )
}
