import React from "react"; 
import styles from "./index.module.scss"; 
import HouseboatIcon from '@mui/icons-material/Houseboat';
import Link from 'next/link' ; 
import Router from 'next/router'; 
import Image from 'next/image';


const CatalogButton =({data})=>{

    return(
        <div 
        className={styles.catalogButton}
        >
            <a
            onClick={()=>{
                Router.push(
                    {
                        pathname: '/filter',
                        query: { category : data.categoryName },
                    }
                )
            }}
            >
                {/* <HouseboatIcon/> */}
                <Image
                src="/cardImg.png"
                alt="category logo image"
                width={20}
                height={20}
                />
                <p>{data.categoryName}</p>
            </a>
            <div className={styles.catalogHoveredElement}>
                {
                    data?.subCategories?.map((item ,  index )=>{
                        return (
                           
                                <a
                                onClick={(e)=>{
                                    e.preventDefault();
                                    Router.push(
                                        {
                                            pathname: '/filter',
                                            query: { subCategoryId : item._id },
                                        }
                                    )
                                }}
                                >
                                    <div 
                                    key={`catBut${index}`}
                                    >
                                        {/* <HouseboatIcon/> */}
                                        <Image
                                        src="/cardImg.png"
                                        alt="category logo image"
                                        width={20}
                                        height={20}
                                        />
                                        <p>{item.categoryName}</p>
                                    </div>
                                </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CatalogButton ;