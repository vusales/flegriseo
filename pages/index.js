import React from "react"; 
import Image from 'next/image'
import styles from '../styles/Home.module.css' ; 
import Container from '@mui/material/Container';
import CommonLayout from "../layout/commonLayout";

export default function Home() {
  return (
    <Container minWidth="sm" style={{backgroundColor: "green"}} >
      <CommonLayout>
        <div>childreen</div>
      </CommonLayout>
    </Container>
  )
}
