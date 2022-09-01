import React from "react"; 
import styles from "./index.module.scss";
import Slider from "react-slick";
import Image from "next/image"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "block", 
            // ...styles.nextArrow ,
            backgroundColor: "#DADADA", 
            borderRadius: 100 ,
        }}
        onClick={onClick}
      ></div>
    );
  }
  
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
            ...style,
            // display: "block", 
            // ...styles.prevArrow
            backgroundColor: "#DADADA", 
            borderRadius: 100 ,
            display:"flex", 
            alignItems:"center" , 
            justifyContent:"center",
        }}
        onClick={onClick}
      />
    );
}

var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true , 
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const demoData = [
    {
        id:1,
        imagesrc : "/banner1.png",
    }, 
    {
        id:2,
        imagesrc : "/banner2.jpg",
    }, 
    {
        id:3,
        imagesrc : "/banner3.png",
    }, 
]; 


const Banner = () => {


    return(
        <div className={styles.bannerContainer}>
            <Slider {...settings} >
                {
                    demoData.map((item , index)=>{
                        return(
                            <div key={`slickBanner${index}`} className={styles.subContainer}>
                                <div className={styles.textContainer}>
                                    <div>
                                        <p className={styles.subTitle}>Дисконтная система</p>
                                        <p className={styles.title}>Постоянные скидки</p>
                                        <p className={styles.subTitleSecond}>Бонусы и кешбэк система!</p>
                                    </div>
                                    
                                    <p className={styles.description}>Накопительная система скидок и бонусы за пополнение баланса. Заказывай больше и плати меньше. Возможность максимальной экономии для оптовых клиентов и крупных разовых заказов. Мы до мелочей продумали систему взаимодействия с нашей аудиторией заказчиков. Она получила такой формат, при котором вы гарантированно а останетесь с нами. Получение бонуса за разовое пополнения баланса от 45 тысяч рублей и больше.</p>
                                    
                                    <div className={styles.buttonsContainer}>
                                        <Link href="/">
                                            <a  className={styles.bannerButton}>Раскрутка Ютуб</a>
                                        </Link>
                                        <Link href="/">
                                            <a 
                                            className={styles.bannerButton}
                                            style={{backgroundColor: "#000"}}
                                            >Система подписок</a>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.imageContainer}>
                                    <Image src={item.imagesrc} width={300} height={300} alt="banner" /> 
                                </div>
                         </div>
                        )
                    })
                }
            </Slider>

           
        </div>
    )
} 


export default Banner;