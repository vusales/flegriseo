import React from "react"; 
import styles from "./index.module.scss"; 
import CatalogButton from "./CatalogButton";

const data = [
    {
        id:1 , 
        icon: "" , 
        title: "Instagram", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Instagram 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Instagram 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Instagram 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Instagram 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 2, 
        icon: "" , 
        title: "Telegram", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Telegram 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Telegram 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Telegram 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Telegram 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 3, 
        icon: "" , 
        title: "Whatsapp", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Whatsapp 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Whatsapp 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Whatsapp 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Whatsapp 4", 
                link: "flegri.com",
            },
        ] , 
    },
]; 


const Catalog = () => {
    return (
        <div className={styles.catalogContainer}>
            <p>Service categories</p>
            {
                data.map((item , index)=>{
                    return(
                        <CatalogButton 
                        key={`catalog-Button${item.id}`}
                        data={item} 
                        />)
                })
            }
        </div>
    )
}

export default Catalog; 