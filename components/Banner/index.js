import React from "react"; 
import styles from "./index.module.scss";
import Slider from "react-slick";
import Image from "next/image"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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
        <div>
            <Slider {...settings} >
                {
                    demoData.map((item , index)=>{
                        return(
                            <div key={`slickBanner${index}`} className={styles.imageContainer}>
                                <Image src={item.imagesrc} width={500} height={500} alt="banner" /> 
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
} 


export default Banner;