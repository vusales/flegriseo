import React from "react"; 
import styles from "./index.module.scss";
import Router from "next/router";
import Image from "next/image";



const SingleFilterButton = ({data}) => {
    return (
        <div 
        className={styles.singleButton}
        onClick={()=>{
            Router.push({
                pathname: '/Filter',
                query: { subCategoryId : data._id },  
            })
        }}
        >
            {
                data.icon?
                <Image
                src="/cardImg.png"
                alt="category logo image"
                width={15}
                height={15}
                />
                :null
            }
            <p>{data.categoryName}</p>
        </div>
    )
}

export default SingleFilterButton ;